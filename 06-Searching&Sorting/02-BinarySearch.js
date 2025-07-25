/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let left = 0;
    let right = n-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(target == nums[mid] ) return mid;
        else if(target > mid){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return -1;
};

const array = [-1,0,3,5,9,12];
let target = 0;
const result = search(array,target);
console.log(result);