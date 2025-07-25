/**
 * Prints a right-angled triangle pattern of asterisks (*) aligned to the right with leading spaces, height n.
 * @param {number} n - The height of the triangle.
 */
function pattern6(n) {
  for (let i = 0; i < n; i++) {
    //adding empty spaces
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    //adding starts
    for (let k = 0; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
}

let n = 5;
pattern6(n);

/* Output starts here:
    *
   **
  ***
 ****
*****
*/