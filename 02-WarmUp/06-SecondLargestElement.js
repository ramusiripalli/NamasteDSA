function secondLargest(nums){

let n = nums.length;

let largest = -Infinity;
let secondLargest = -Infinity;
for(let i=0;i<n;i++)
{
  if(nums[i] > largest){
    secondLargest = largest;
    largest = nums[i];
  }
  else if(nums[i] > secondLargest && nums[i] != largest){
    secondLargest = nums[i];
  }
}

return secondLargest != -Infinity ? secondLargest : -1; 
}

const arr = [];
let res = secondLargest(arr);
console.log(res);
