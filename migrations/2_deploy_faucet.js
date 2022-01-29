const Token = artifacts.require("Token");
const Faucet = artifacts.require("Faucet");

module.exports = async function (deployer) {
  await deployer.deploy(Token);
  await deployer.deploy(Faucet,Token.address)
  let token = await Token.deployed()
  let faucet = await Faucet.deployed()
  await token.approve(Faucet.address, "10000000000000000000000") // Approving 10000 tokens to the faucet contract
  await faucet.addFunds("10000000000000000000000") // sending 10000 tokens to the faucet contract
};
