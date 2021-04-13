const Factory = artifacts.require("VrapFactory");
const fee = "0xAb3C96d5492A54014e604bDA3bFF6f6c4157f6FA";

module.exports = async function (deployer) {
  deployer.deploy(Factory, fee);
};
