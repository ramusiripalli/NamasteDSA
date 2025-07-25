
const arr = [5,3,2,0,1];
function sumArrayRecursion(n){
if(n==0) return arr[n];

return arr[n] + sumArrayRecursion(n-1);
}

console.log(sumArrayRecursion(arr.length-1));
