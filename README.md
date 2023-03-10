
## 🚀 Getting Started

##### Setup

> Install npm dependencies using npm install

```shell
cd Milky-WEI && npm install
```

## Get a Private Key

You can get a private key from a wallet provider [such as Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).


## Add your Private Key as an Environment Variable

Add your private key as an environment variable by running this command:

 ```
export PRIVATE_KEY='abcdef'
```

If you use a .env file, don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!


## Get the Deployer Address

Run this command:
```
yarn hardhat get-address
```

The will show you the ethereum-style address associated with that private key and the filecoin-style f4 address (also known as t4 address on testnets)! The Ethereum address can now be exclusively used for almost all FEVM tools, including the faucet.


## Fund the Deployer Address

Go to the [Hyperspace testnet faucet](https://hyperspace.yoga/#faucet), and paste in the Ethereum address from the previous step. This will send some hyperspace testnet FIL to the account.


## Deploy the Contracts

Currently there are 2 main types of contracts:

* Basic Solidity Examples: Simple contracts to show off basic solidity

* Filecoin API Examples: Contracts that demo how to use the Filecoin APIs in Solidity to access storage deals and other Filecoin specific functions.


Type in the following command in the terminal to deploy all contracts:

 ```
yarn hardhat deploy
```

This will compile all the contracts in the contracts folder and deploy them to the Hyperspace test network automatically!

Keep note of the deployed contract addresses for the next step.
```

Let's Run this command for dev

```shell
npm run dev
--or--
yarn dev
```



## 📖 Learn More



## ☁ Deploy




### Stack

## Filecoin Virtual Machine -
The NFTMarketplace oriented smart contract that will facilitate purchase, creation and selling of game development assets is deployed on the Filecoin Hyperspace testnet. In addition, deployment of the frontend via Spheron will also leverage Filecoin for storage.

## Push Protocol - 
Push notifications will be a powerful tool for engaging with users and keeping them updated on relevant content. By leveraging the push protocol, notifications can be sent via messages that appear on the user's device. These notifications can be triggered based on certain events, such as when a user receives a message pertaining to a game asset or when content is updated and can be tailored to each user's interests and preferences. In this instance, push notifications are integrated within the wallet connect button.

## Lighthouse - 
Lighthouse, as implemented in the project can be accessed through the "choose file" button in the frontend hero section. It is used to store data permanently on IPFS after getting signed by the user.

## Spheron -
Spheron was used to deploy and host the site.

### Screenshots

![MilkyWei screenshot 2](https://user-images.githubusercontent.com/86532040/217013241-4fb32849-e563-4a40-a6ce-5d4db1a39736.png)

![MilkyWei screenshot3](https://user-images.githubusercontent.com/86532040/217013311-32f61b2b-576b-40ba-aef3-886dc2ed6c4c.png)

![MilkyWei screenshot 1](https://user-images.githubusercontent.com/86532040/217013186-89f1b790-518b-4416-bc48-a82a9fffac81.png)
