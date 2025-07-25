/**
 * @param {number} n
 * @return {boolean}
 */
function sum(arr){
    let sum = 0;
    for(let n of arr){
        sum+= n;
    }
    return sum;
}

function product(arr){
    let product = 1;
    for(let num of arr){
        product *= num;
    }
    return product;
}
var checkDivisibility = function(n) {
    const arr = [];
    let dup = n;
    while(n>0){
        let lastDigit = n%10;
        arr.push(lastDigit);
        n = Math.floor(n/10);
    }
    let digitSum = sum(arr);
    let digitProduct = product(arr);

    let total = (digitSum+digitProduct);

    let result = (dup % total) == 0;

    if(result){
      return true;
    }
    return false;
    
};

console.log(checkDivisibility(99));