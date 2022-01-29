import { useEffect, useState } from 'react'
import { Button, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

import { ethers } from 'ethers'


const FaucetBox = ({symbol, name, faucetContract , ERC20Contract, account}) => {

    const [maxAmount, setMaxAmount] = useState()
    const [availableAmount, setAvailableAmount] = useState()
    const [error, setError] = useState(null)
    const [tx, setTx] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const loadData = async () => {
            try{
                const maxRetrieval = await faucetContract.allowed_retrieval()
                setMaxAmount(ethers.utils.formatEther(maxRetrieval))
                //Update balance on faucet
                const available = await faucetContract.availableAmount()
                setAvailableAmount(ethers.utils.formatEther(available))
            }
            catch(error){

            }

        }
        loadData()
    }, [account, faucetContract])

    const askForTokens = async () => {
        setTx(null)
        setError(null)
        try {
            setLoading(true)
            const tx = await faucetContract.askForTokens()
            const receipt = await tx.wait()
            setTx(receipt.transactionHash) 
            const available = await faucetContract.availableAmount()
            setAvailableAmount(ethers.utils.formatEther(available))
        }
        catch (error) {
            setError(error.data.message)

        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Card className='text-center'>
                <Card.Header>Faucet</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Click the button to get some ERC20 tokens.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Token: {name}</ListGroupItem>
                    <ListGroupItem>Symbol: {symbol}</ListGroupItem>
                    <ListGroupItem>Address: {ERC20Contract.address}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Row>
                        <Col>
                            <p className="fw-bold">Retrieval every 6 hours:</p>
                            <span>{maxAmount} {symbol}</span>
                        </Col>
                        <Col>
                            <p className="fw-bold">Available amount:</p>
                            <span>{availableAmount} {symbol}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={askForTokens}>Ask for funds</Button>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col>
                            {loading ? 'Processing. . . ' : tx ? <p className="text-break">{tx}</p> : error && <p>{error}</p>}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default FaucetBox