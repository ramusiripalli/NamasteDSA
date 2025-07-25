/**
 * Prints a right-angled triangle pattern where the values alternate between 1 and 0, with the toggle persisting across rows.
 * @param {number} n - The height of the triangle.
 */
function pattern8(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
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

let n = 5;
pattern8(n);

/* Output starts here:
1
01
010
1010
10101
*/