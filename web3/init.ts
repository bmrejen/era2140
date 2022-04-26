import detectEthereumProvider from "@metamask/detect-provider"

async function initWeb3(provider: any) {
  return provider
    .request({ method: "eth_requestAccounts" })
    .catch((error: Error) => new Error(error.toString()))
}

function listenToAccounts(provider: any, setAccount: Function) {
  provider.on("accountsChanged", (accounts: string[]) => {
    setAccount(accounts[0])
  })
}

async function getProvider(): Promise<any> {
  const provider = await detectEthereumProvider()
  if (typeof provider === "undefined") throw new Error("No provider found")
  return provider
}

export { initWeb3, getProvider, listenToAccounts }
