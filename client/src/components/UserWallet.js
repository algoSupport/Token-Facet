import { Card } from "react-bootstrap"

import ERC20Balance from "./ERC20Balance"
import { UserAddress } from "./Address"
import { useWeb3React } from "@web3-react/core"

const UserWallet = ({ERC20Contract, symbol}) => {
    const {chainId, account} = useWeb3React()

    return (
            <Card>
                <Card.Header>Your Info</Card.Header>
                <Card.Body>
                    <Card.Title><span>Currently connected using</span> <UserAddress account={account} /></Card.Title>
                    <Card.Text>
                        <ERC20Balance ERC20Contract={ERC20Contract} account={account} symbol={symbol} />
                    </Card.Text>
                    <Card.Text>
                        ChainId: {chainId}
                    </Card.Text>
                </Card.Body>
            </Card>
        
    )
}
export default UserWallet