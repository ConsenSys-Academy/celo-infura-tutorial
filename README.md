## Running Celo Using Infura and Truffle

Infura is excited to announce the addition of the Celo Network to the list of its XXXXXX number of networks available on the Infura platform. Celo is an EVM-compatible Layer 1 built with the hope of accelerating social good through blockchain. It’s a major player in ReFi, or “Regenerative Finance,” a movement employing web3 to solve societal issues such as climate change, income inequality and biodiversity.

Since much of the world operates from their smartphone, Celo treats cellphones as first-class citizens in their network. The mobile crypto-wallet Valora was first developed within Celo before spinning out in 2021. Celo also 

Celo supports these laudable goals through a number of initiatives and technical features such as:

- Using zero-knowledge proofs and a carbon-neutral Proof of Stake consensus mechanism to lower its environmental footprint 
- Creating low gas fees which can be paid in stablecoins
- Prioritizing mobile-first usage through its development of the external project Valora and emphasis on mobile-optimized languages such as React, React Native and Flutter.

All these features make Celo attractive for those looking to use blockchain for good. Are you ready to build on it? In this tutorial, we’re going to show you how easy it is to get started with Celo Composer using Infura and Truffle.


Celo Composer provides easy templates to get started with development. You can use Celo Composer by following the steps in the Readme. 

To use Truffle, there’s a bit of tweaking you have to do. You can either clone the original repo and uncomment out the contract concerns, or we have a forked repository where we’ve taken care of that for you:

`Git clone http://www.github.com/cooganb/celo-infura-truffle`

We’ll need some testfunds from Alfajores, Celo’s testnet. Grab your nearest MetaMask developer account and claim some free fun money. (The testnet site will add Alfajores to your MetaMask account if you allow it. If for some reason you don’t get prompted checkout Chainlist)

Now that we’ve got some funds to work with, let’s deploy our contract to Celo’s testnet.

For this demo, we’re going to be compiling a basic Greeter contract to Celo that’s already been written and prepared. We’re using Truffle to compile contracts. Make sure you have Truffle installed and then run the following commands:

Cd packages/truffle
Yarn install
Truffle compile

For contract deployment, we need a private key to deploy. Typically this is stored in an .env file that’s accessed in truffle- / hardhat.config.js. However, Truffle has a great feature called Dashboard, where all we need to do is make sure we use the MetaMask account from the previous example.

Fire up Truffle Dashboard in your terminal with:

`truffle dashboard`

You should see a browser window open. Click “Connect Wallet” and make sure you’re on Alfajores, like the screenshot below:



Open up a new terminal and run the following command to deploy the Greeter contract:

`truffle deploy –network dashboard`



Click “Process” on the transaction and it will prompt MetaMask to open. Confirm the transaction.

Assuming you have funds and everything goes well, the contract should be deployed.

Now, let’s setup the frontend side of things. We’ll setup React but you can use React Native (with or without Expo) or Flutter as well. 

Move into the react-app packages folder, install the dependencies and get a development environment going:

```
Cd ../packages/react-app
Yarn install
Yarn Dev
```

Open up `localhost:3000` (unless you changed the default port) on your browser and connect your wallet. Different from Ethereum, there are a number of different wallet options, including Valora. This speaks to the diversity of development happening on the Celo network. 

Once you connect with the account you funded with Alfajores, you should see the following: 


Click on the `0` index on the toolbar and you’ll get the information about the Greeter contract we deployed:


From here, you can read or set the value `greet` from our contract. Give it a try!

This is just the beginning of what’s possible on Celo with celo-composer. If you want to build something with the template, use React-with-tailwind template. This will give you a boilerplate template with a great starting point.

Celo-composer also has support for more mobile first languages, such as Flutter and React Native. This speaks to the focus of cLabs, Celo Foundation and the Celo protocol to bring blockchain to places most in need of financial and environmental assistance.