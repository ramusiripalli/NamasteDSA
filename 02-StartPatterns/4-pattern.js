/**
 * Prints a right-angled triangle pattern where each row i consists of the number (i+1) repeated (i+1) times.
 * @param {number} n - The height of the triangle.
 */
function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += (i + 1);
    }
    console.log(row);
  }
}

let n = 5;
pattern4(n);

/* Output starts here:
1
22
333
4444
55555
*/