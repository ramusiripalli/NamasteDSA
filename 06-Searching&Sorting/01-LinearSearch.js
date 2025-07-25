// Function to perform linear search on an array
// Parameters:
// - arr: The array to search in
// - target: The value to search for
// Returns: The index of the target if found, otherwise undefined (consider returning -1 for not found)
function LinearSearch(arr, target) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element matches the target
    if (arr[i] == target) {
      // If match found, return the index
      return i;
    }
  }
  return -1;
}

// Sample array
const arr = [4, 9, 1, 0, 3, 2];
// Target value to search for
let target = 0;
// Call the linear search function
const result = LinearSearch(arr, target);
// Output the result
console.log(`Target ${target} found at index ${result}`);


// Approach
// The linear search algorithm works by iterating through each element 
//  of the array sequentially from the beginning to the end.
//  For each element, it checks if it matches the target value.
//  If a match is found, it returns the index of that element. 
// If no match is found after checking all elements, 
// the function currently returns -1 explicitly).

// Time Complexity (TC)
// Best Case: O(1) - When the target is found at the first index.
// Average Case: O(n) - On average, it may need to check half the elements.
// Worst Case: O(n) - When the target is at the last index or not present in the array,
// requiring traversal of all n elements.

// Space Complexity (SC)
// O(1) - The algorithm uses a constant amount of extra space, regardless of the input size.