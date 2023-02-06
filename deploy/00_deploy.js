require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]
    
    //deploy NFTMarketplace
    const NFTMarketplace = await ethers.getContractFactory('NFTMarketplace', wallet);
    console.log('Deploying nftmarketplace...');
    const nftmarketplace = await NFTMarketplace.deploy(tokensToBeMinted);
    await nftmarketplace.deployed()
    console.log('NFTMarketplace deployed to:', nftmarketplace.address);

   
}