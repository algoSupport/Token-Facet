import { Container, Row } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";

import Header from "./components/Header";
import Faucet from "./components/Faucet";

function App() {
  const context = useWeb3React()
  const { active} = context


  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row className="">
        {active ? <Faucet/> : "Please connect your wallet to Mumbai Polygon network"}
      </Row>
    </Container>
  );
}

export default App;
