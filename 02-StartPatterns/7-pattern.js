/**
 * Prints a right-angled triangle pattern where each row alternates between 1 and 0, starting with 1 for each row.
 * @param {number} n - The height of the triangle.
 */
function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      row += toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

pattern7(5);

/* Output starts here:
1
10
101
1010
10101
*/