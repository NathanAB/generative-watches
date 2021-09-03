const Watch = artifacts.require("./Watch.sol");
const WatchFactory = artifacts.require("./WatchFactory.sol");

const DEPLOY_WATCHES_SALE = true;
const DEPLOY_WATCHES = true;

module.exports = async (deployer, network, addresses) => {
  // OpenSea proxy registry addresses for rinkeby and mainnet.
  let proxyRegistryAddress = "";
  if (network === 'rinkeby') {
    proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
  } else {
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  }

  if (DEPLOY_WATCHES) {
    await deployer.deploy(Watch, proxyRegistryAddress, {gas: 8000000});
  }

  if (DEPLOY_WATCHES_SALE) {
    await deployer.deploy(WatchFactory, proxyRegistryAddress, Watch.address, {gas: 10000000});
    const watch = await Watch.deployed();
    watch.setFactoryContractAddress(WatchFactory.address)
  }
};
