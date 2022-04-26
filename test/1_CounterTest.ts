const Counter = artifacts.require("Counter.sol")

contract("Counter", function (accounts) {
  it("should be able to increment the counter", function () {
    return Counter.deployed().then(function (instance) {
      return instance.increment().then(function (result) {
        return instance.get().then(function (result) {
          assert.equal(result.toNumber(), 1, "counter should be 1")
        })
      })
    })
  })
})
