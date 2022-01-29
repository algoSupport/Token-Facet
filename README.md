# ERC20 Faucet

ERC20 Faucet is a fullstack React and Truffle repository looking to ease the development of a faucet for an ERC20 token.

## Demo

You can test a demo deployed on Mumbai Polygon testnet on [this](https://github.com/ismaventuras/ERC20-Faucet) link.

![Demo](https://raw.githubusercontent.com/ismaventuras/ERC20-Faucet/main/docs/images/main.png)

## Owner board

Manage the faucet from the web client connecting using the owner account.

![Demo](https://raw.githubusercontent.com/ismaventuras/ERC20-Faucet/main/docs/images/ownerboard.png)

## Installation

To install this application you need to edit your `truffle-config.js` using the sample in the root of the project as reference. You need to create a .secret file including your private key to be able to deploy the contracts to your desired network.

### Install truffle dependencies

#### Dependencies

Dependencies are already defined on package.json but you can install them manually using the following list.

- @openzeppelin/contracts
- @truffle/hdwallet-provider
- truffle-plugin-verify

```bash
npm install 
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

### Web client

```bash
cd client
npm install
npm run start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)