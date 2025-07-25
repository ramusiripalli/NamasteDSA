function factorial(n){
if(n==0) return 1;

return n * factorial(n-1);
}

let n = 0;
let res = factorial(n);
console.log(res);