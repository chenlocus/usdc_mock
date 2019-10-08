const TestToken = artifacts.require("./Stabletoken.sol");
module.exports = function(deployer,accounts) {
    deployer.deploy(TestToken);
};
