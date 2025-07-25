/**
 * Checks if a given integer is a palindrome number.
 * A palindrome number reads the same forwards and backwards.
 * Negative numbers are not considered palindromes.
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a palindrome, false otherwise.
 */
function isPalindrome(n) {
  if (n < 0) return false;
  let duplicate = n;
  let reverse = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return duplicate === reverse;
}

let n = 1;
let result = isPalindrome(n);
console.log(result);

/* Output starts here:
true
*/