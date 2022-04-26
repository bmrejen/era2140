// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract CounterContract {

  struct Counter {
        uint256 _value;
    }
    Counter counter;

    function current() public view returns (uint256) {
        return counter._value;
    }

    function increment() public {
        unchecked {
            counter._value += 1;
        }
    }

    function decrement() public {
        uint256 value = counter._value;
        require(value > 0, "Counter: decrement overflow");
        unchecked {
            counter._value = value - 1;
        }
    }

    function reset() public {
        counter._value = 0;
    }
}
