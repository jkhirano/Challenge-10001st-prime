module.exports = function(n) {
  // do work here

  let primes = [2, 3, 5];

  const isPrime = num => {
    for (let n = 0; n < primes.length; n++) {
      // if num = nth (6th) element in array, return true;
      if (num === primes[n]) return true;
      // if num / nth (6th) element in array = 0 (no remainder), return false;
      if (num % primes[n] === 0) return false;
    }
    return true;
  };
  for (var i = 3; primes.length < n; i++)
    if (isPrime(i) && primes.indexOf(i) === -1) primes.push(i);
  return primes.pop();
};
