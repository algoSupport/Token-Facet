import { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import TokenArtifact from '../contracts/Token.json'
import FaucetArtifact from '../contracts/Faucet.json'


import FaucetBox from './FaucetBox'
import UserWallet from './UserWallet'
import OwnerBoard from './OwnerBoard'

const Faucet = () => {
    const { active, chainId, library, account } = useWeb3React()
    const [ERC20Contract, setERC20Contract] = useState()
    const [faucetContract, setFaucetContract] = useState()
    const [name, setName] = useState()
    const [symbol, setSymbol] = useState()
    const [owner, setOwner] = useState()

    useEffect(() => {
        const loadData = async () => {
            const tokenContract = new ethers.Contract(TokenArtifact.networks[chainId].address, TokenArtifact.abi, library.getSigner())
            const _faucetContract = new ethers.Contract(FaucetArtifact.networks[chainId].address, FaucetArtifact.abi, library.getSigner())
            setERC20Contract(tokenContract)
            setFaucetContract(_faucetContract)
            const _name = await tokenContract.name()
            setName(_name)
            const _symbol = await tokenContract.symbol()
            setSymbol(_symbol)
            const _owner = await _faucetContract.owner()
            setOwner(_owner)
        }
        loadData()
    }, [account, chainId, library])

    return (
        <>
            {active &&
                <Container>
                    <Row className='m-3 justify-content-center'>
                        <Col sm={6}>
                            <UserWallet symbol={symbol} ERC20Contract={ERC20Contract} className='mb-2' />
                        </Col>
                        <Col sm={6}>
                        {ERC20Contract && faucetContract&& 
                            <FaucetBox name={name} symbol={symbol} ERC20Contract={ERC20Contract} account={account} faucetContract={faucetContract}/>
                        }
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col sm={6}>
                            {account === owner && <OwnerBoard faucetContract={faucetContract} ERC20Contract={ERC20Contract} />}
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}
export default Faucet