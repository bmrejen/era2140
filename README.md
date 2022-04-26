## Why is there an async function inside the useEffect hook ?

Best practices discourage the use of an async callback. But nothing prevents you from defining an async function inside the callback.

## Why is there an empty return statement in the useEffect callback?

To remind colleagues that they need to remove any event listeners or intervals that would be defined in the callback
