/* 
 * Filename: sophisticated_code.js
 * Description: This code implements a complex algorithm for finding prime numbers up to a given limit.
 */

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  
  return true;
}

function findPrimes(limit) {
  const primes = [2, 3];
  
  for (let i = 5; i <= limit; i += 2) {
    if (isPrime(i)) primes.push(i);
  }
  
  return primes;
}

function printPrimes(primes) {
  for (let i = 0; i < primes.length; i++) {
    console.log(primes[i]);
  }
}

const limit = 1000;
const primes = findPrimes(limit);
printPrimes(primes);
