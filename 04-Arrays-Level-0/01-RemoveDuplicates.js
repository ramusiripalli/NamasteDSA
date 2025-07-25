function RemoveDuplicates(arr)
{
let n = arr.length;
let x = 0;
for(let i=0;i<n;i++)
{
 if(arr[i] > arr[x]){
  x = x+1;
  arr[x] = arr[i];
 }
}
return x+1;
}


const arr = [0,0,1,1,1,2,2,3,3,4,5,5,5];
const res = RemoveDuplicates(arr);
console.log(res);