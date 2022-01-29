# ERC20 Faucet

ERC20 Faucet is a fullstack React and Truffle repository looking to ease the development of a faucet for an ERC20 token.
For Smart Contract development truffle has been used to compile and migrate the contracts and for the web client side React and Bootstrap has been used. To be able to use Metamask in the web client [@web3-react libraries](https://github.com/NoahZinsmeister/web3-react/tree/v6) hav been used. As web3 library [ethers](https://docs.ethers.io/v5/) has been used instead of web3js.

## Demo

You can test a demo deployed on Mumbai Polygon testnet on [this](https://github.com/ismaventuras/ERC20-Faucet) link.

![Demo](https://raw.githubusercontent.com/ismaventuras/ERC20-Faucet/main/docs/images/main.png)

## Owner board

Manage the faucet from the web client connecting using the owner account.

![Demo](https://raw.githubusercontent.com/ismaventuras/ERC20-Faucet/main/docs/images/ownerboard.png)

## Installation

To install this application you need to edit your `truffle-config.js` using the sample in the root of the project as reference. You need to create a .secret file including your private key to be able to deploy the contracts to your desired network.

### Dependencies

Dependencies are already defined on package.json but you can install them manually using the following list.

- @openzeppelin/contracts
- @truffle/hdwallet-provider
- truffle-plugin-verify
- create-react-app
- react-bootstrap
- bootswatch
- ethers

```bash
npm install 
cd client
npm install
npm run start
```

### Deploy contracts

Replace networkName by the network name defined in truffle config.

```bash
truffle migrate --network networkName
```

### Verify Contracts

You can verify the contracts on etherscan/bscscan/etc using truffle-plugin-verify, replace networkName by your desired network.

```bash
truffle run verify Token Faucet --network networkName
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)