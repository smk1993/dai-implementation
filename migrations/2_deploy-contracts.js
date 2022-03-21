const Dai = artifacts.require("Dai");
const SimpleDefi = artifacts.require("SimpleDefi");

const DAI = web3.utils.fromAscii('DAI');
module.exports = async function (deployer, _network, accounts) {

 await deployer.deploy(Dai);
 const dai = await Dai.deployed();
await deployer.deploy(SimpleDefi, dai.address)
const simpleDefi = await SimpleDefi.deployed();
await dai.faucet(simpleDefi.address, 100);
await simpleDefi.createTransfer(accounts[1], 100);
const balance0 = await dai.balanceOf(simpleDefi.address);
const balance1 = await dai.balanceOf(accounts[1]);
console.log(balance0.toString(), balance1.toString());
};
