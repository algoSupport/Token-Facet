import { ethers } from 'ethers'
import { useState } from 'react'
import { Card, Button, Col, Row, Form } from 'react-bootstrap'


const FaucetFunctionNumberInput = ({ faucetContract, method }) => {
    const [amount, setAmount] = useState(0)
    const [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        try {
            let formattedAmount = ethers.utils.parseEther(amount)
            let tx = await faucetContract[method](formattedAmount)
            await tx.wait()
            setMessage('🟢')
            setAmount(0)
        }
        catch (error) {
            let msg = error.data.message.substring(error.data.message.indexOf(':') + 1)
            setMessage(msg)
        }
    }

    return (
        <Form onSubmit={onSubmit} className="border-bottom m-1">
            <Row >
                <Col>
                    <Form.Label>{method}</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId={method}>

                        <Form.Control
                            type="number"
                            min="1" step='1'
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            placeholder="Enter an amount in ether" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
                <Col>
                    <p>{message}</p>
                </Col>
            </Row>
        </Form>
    )
}

const RemoveFundsInput = ({ faucetContract }) => {
    const [message, setMessage] = useState('')

    const onClick = async (e) => {
        e.preventDefault()
        try{
            let tx = await faucetContract.removeFunds()
            await tx.wait()
            setMessage('🟢')
        }
        catch(error){
            let msg = error.data.message.substring(error.data.message.indexOf(':') + 1)
            setMessage(msg)
        }
    }
    return (
        <Form onSubmit={onClick}>
            <Row>
                <Col>
                    <Form.Label>removeFunds</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
                <Col>
                    <p>{message}</p>
                </Col>
            </Row>
        </Form>
    )
}

const ApproveTokensInput = ({ ERC20Contract, faucetContract }) => {
    const [amount, setAmount] = useState(0)
    const [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        try{
            let formattedAmount = ethers.utils.parseEther(amount)
            let tx = await ERC20Contract.approve(faucetContract.address, formattedAmount)
            await tx.wait()
            setMessage('🟢')
            setAmount(0)
        }
        catch(error){
            let msg = error.data.message.substring(error.data.message.indexOf(':') + 1)
            setMessage(msg)  
        }
        
    }
    return (
        <Form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <Form.Label>Approve Tokens</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="addFunds">
                        <Form.Control
                            type="number"
                            min="1" step='1'
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            placeholder="Enter an amount of tokens" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
                <Col>
                    <p>{message}</p>
                </Col>
            </Row>
        </Form>
    )
}

const OwnerBoard = ({ ERC20Contract, faucetContract }) => {


    return (
        <Card className="mx-auto">
            <Card.Header className="text-center">Admin Board</Card.Header>
            <Card.Body>
                <Card.Title className="text-center">Manage the faucet and approve tokens</Card.Title>
                <>
                    <ApproveTokensInput faucetContract={faucetContract} ERC20Contract={ERC20Contract} />
                    <FaucetFunctionNumberInput faucetContract={faucetContract} method="addFunds" />
                    <FaucetFunctionNumberInput faucetContract={faucetContract} method="setAllowedRetrieval" />
                    <RemoveFundsInput faucetContract={faucetContract} />
                </>

            </Card.Body>
        </Card>
    )
}
export default OwnerBoard