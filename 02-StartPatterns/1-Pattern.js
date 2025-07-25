/**
 * Prints a square pattern of asterisks (*) with size n x n.
 * @param {number} n - The size of the square.
 */
function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

let n = 5;
pattern1(n);

/* Output starts here:
*****
*****
*****
*****
*****
*/