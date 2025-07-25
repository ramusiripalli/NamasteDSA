/**
 * Prints an inverted right-angled triangle pattern of numbers from 1 to (n-i) for each row i.
 * @param {number} n - The height of the triangle.
 */
function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += (j + 1);
    }
    console.log(row);
  }
}

let n = 5;
pattern5(n);

/* Output starts here:
12345
1234
123
12
1
*/