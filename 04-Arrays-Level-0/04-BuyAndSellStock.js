function BuyAndSellOptimise(prices)
{
let n = prices.length;
let min = prices[0];
let maxProfit = 0;
for(let i=1;i<n;i++)
{
  if(prices[i] < min){
    min = prices[i];
  }
  maxProfit = Math.max(maxProfit,prices[i]-min);
}

return maxProfit;
}

const prices = [7,1,5,3,7,4];
const result = BuyAndSellOptimise(prices);
console.log(result);














// function BuyAndSellStocks(nums)
// {
// let max = 0;
// let len = nums.length;
// for(let i=0;i<len-1;i++)
// {
//   for(let j=i+1;j<len;j++)
//   {
//     if(nums[i] < nums[j])
//     {
//       max = Math.max(max,(nums[j]-nums[i]));
//     }
//   }
// }

// return max;
// }

// const arr = [7,6,5,4,3,2];
// const res = BuyAndSellStocks(arr);
// console.log(res);
