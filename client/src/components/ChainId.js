import { useWeb3React } from "@web3-react/core"

const ChainInfo = () => {
    const {chainId} = useWeb3React()

    return(
        <>
            <p>ChainId: {chainId}</p>
        </>
    )}
export default ChainInfo