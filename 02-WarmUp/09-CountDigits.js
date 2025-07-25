function countDigits(n) {
  n = Math.abs(n);        // Step 1: Make sure the number is positive
  if(n == 0) return 1;    // Step 2: Special case – if n is 0, return 1 (because 0 has 1 digit)

  let count = 0;

  while(n > 0) {          // Step 3: Loop until n becomes 0
    n = Math.floor(n / 10); // Remove the last digit (integer division)
    count++;               // Increment the digit counter
  }

  return count;            // Step 4: Return the total number of digits
}


let res = countDigits(-2345);
console.log(res); // Output: 4
