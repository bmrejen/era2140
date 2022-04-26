import { useEffect, useState } from "react"
import "./App.css"
import Web3 from "web3"
import { initWeb3, getProvider, listenToAccounts } from "./web3/init"
import CounterContract from "./build/contracts/CounterContract.json"
import {
  incrementCurrentValue,
  getCurrentValue,
  resetCurrentValue,
  decrementCurrentValue
} from "./web3/methods"

function App() {
  const [account, setAccount] = useState(null)
  const [currentValue, setCurrentValue] = useState(null)
  const contractUrl = "https://ropsten.etherscan.io/address/" + process.env.CONTRACT_ADDRESS
  const [contract, setContract] = useState(null)

  async function getValue(contract: any, account: string) {
    const newValue = await getCurrentValue(contract, account)
    setCurrentValue(newValue)
  }

  async function incrementValue(contract: any, account: string) {
    const newValue = await incrementCurrentValue(contract, account)
    setCurrentValue(newValue)
  }
  const decrementValue = async (contract: any, account: string) => {
    const newValue = await decrementCurrentValue(contract, account)
    setCurrentValue(newValue)
  }
  const resetValue = async (contract: any, account: string) => {
    const newValue = await resetCurrentValue(contract, account)
    setCurrentValue(newValue)
  }

  useEffect(() => {
    getData().catch((err) => new Error(err))
    async function getData() {
      const provider = await getProvider()
      const accounts = await initWeb3(provider)
      setAccount(accounts[0])

      const web3 = new Web3(provider)
      const contract = new web3.eth.Contract(CounterContract.abi, process.env.CONTRACT_ADDRESS)
      setContract(contract)
      listenToAccounts(provider, setAccount)
    }

    return () => {}
  }, [])

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>
        Make sure your Metamask network is set to Ropsten and you have enough ether to pay for gas
        fees
      </p>
      <p>
        A Ropsten faucet is available <a href="https://faucet.dimensions.network/">here</a>
      </p>
      <button onClick={() => incrementValue(contract, account)}>Increment</button>
      <button onClick={() => decrementValue(contract, account)}>Decrement</button>
      <button onClick={() => resetValue(contract, account)}>Reset</button>
      <button onClick={() => getValue(contract, account)}>Current</button>
      <div className="current-value">
        Current Counter Value:
        <p>{currentValue}</p>
      </div>
      <p>
        The contract is visible <a href={contractUrl}>here</a>
      </p>
    </div>
  )
}

export default App
