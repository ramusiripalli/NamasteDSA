function NToOne(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  NToOne(n - 1);
}

let n = 10;
let result = NToOne(n);
console.log(result);

// Approach
// This recursive function prints numbers from n down to 1. 
// It checks if n is 0 (base case) to stop recursion. Otherwise,
//  it prints the current n and calls itself with n-1.
//   The function doesn't return a value, so assigning it to 'result'
//  will yield undefined, but it performs the printing as a side effect.