// Contract Methods

async function getCurrentValueFromContract(contract: any, account: string): Promise<any> {
  return contract.methods.current().call({ from: account })
}

async function incrementValueFromContract(contract: any, account: string): Promise<any> {
  return contract.methods.increment().send({ from: account })
}

async function decrementValueFromContract(contract: any, account: string): Promise<any> {
  return contract.methods.decrement().send({ from: account })
}

async function resetValueFromContract(contract: any, account: string): Promise<any> {
  return contract.methods.reset().send({ from: account })
}

const [incrementCurrentValue, getCurrentValue, decrementCurrentValue, resetCurrentValue] = [
  incrementValueFromContract,
  getCurrentValueFromContract,
  decrementValueFromContract,
  resetValueFromContract
].map((method) => (contract: any, account: string) => settlePromise(method, contract, account))

export {
  incrementCurrentValue,
  getCurrentValue,
  decrementCurrentValue,
  resetCurrentValue,
  getCurrentValueFromContract
}

async function settlePromise(callback: Function, ...args: any[]): Promise<any> {
  try {
    return callback(...args)
  } catch (error: Error) {
    console.error(new Error(error.toString()))
  }
}
