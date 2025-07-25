/**
 * Prints a right-angled triangle pattern of asterisks (*) with height n.
 * @param {number} n - The height of the triangle.
 */
function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

let n = 5;
pattern2(n);

/* Output starts here:
*
**
***
****
*****
*/