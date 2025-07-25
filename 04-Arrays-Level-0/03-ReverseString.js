function ReverseString(s){
let len = s.length;
let halfLen = Math.floor(len/2);

for(let i=0;i<halfLen;i++)
{
  let temp = s[i];
  s[i] = s[len-i-1];
  s[len-i-1] = temp;
}
return s;
}

let str = ["R","a","m","u","s"];
const result = ReverseString(str);
console.log(result)