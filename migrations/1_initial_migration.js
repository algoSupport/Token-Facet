const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  if (deployer.network === 'development'){
    deployer.deploy(Migrations);
  }
};
