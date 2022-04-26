## Smart Contract

The smart contract was deployed on Ropsten at this address: 
https://ropsten.etherscan.io/address/0xeCa87C8EB920aF700C5BA69bf595B6125f5cBA0f

## Technologies used

Web3, React, Typescript and Parcel

## How to use

You can clone the repo and run it locally with parcel

## Environment variables

You can override `process.env.CONTRACT_ADDRESS` with your own address if you want.

If you want to re-deploy the contract, you will have to provide a `process.env.MNEMONIC` as well as a `process.env.INFURA_API_KEY`

## FAQ

### Why is there an async function inside the useEffect hook ?

Best practices discourage the use of an async callback. But nothing prevents you from defining an async function inside the callback.

### Why is there an empty return statement in the useEffect callback?

To remind colleagues that they need to remove any event listeners or intervals that would be defined in the callback
