import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import TokenArtifact from '../contracts/Token.json'


const ERC20Balance = ({ERC20Contract, account, symbol}) => {
    const [balance, setBalance] = useState()

    useEffect(()=>{
        const getBalance = async () => {
            try{
                if(ERC20Contract){
                    const _balance = await ERC20Contract.balanceOf(account)
                    setBalance(ethers.utils.formatEther(_balance))
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getBalance()
    },[ERC20Contract, account])

    return(
        <>
            <span>Balance: {balance} {symbol}</span>
        </>
    )}
export default ERC20Balance