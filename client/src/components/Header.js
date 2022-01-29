import { useWeb3React } from '@web3-react/core'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({ supportedChainIds: [80001] })

const Header = () => {
    const { active, deactivate, activate } = useWeb3React()

    const connect = async () => {
        await activate(injected)
    }
    const disconnect = async () => {
        await deactivate()
    }

    return (
        <Navbar bg="light" expand="lg" className='mb-2'>
            <Container>
                <Navbar.Brand href="#home">Dapp Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Button
                                onClick={connect}
                                disabled={active}
                                variant={active ? "light" : "info"}
                            >
                                Connect
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                onClick={disconnect}
                                disabled={!active}
                                variant={!active ? "light" : "danger"}
                            >
                                Logout
                            </Button>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header