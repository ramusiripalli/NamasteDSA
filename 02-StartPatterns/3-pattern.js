/**
 * Prints a right-angled triangle pattern of numbers from 1 to i+1 for each row i.
 * @param {number} n - The height of the triangle.
 */
function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += (j + 1);
    }
    console.log(row);
  }
}

let n = 5;
pattern3(n);

/* Output starts here:
1
12
123
1234
12345
*/