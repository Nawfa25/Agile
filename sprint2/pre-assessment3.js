// 1
let arr = [5, 2, -7, 3, -2, -1];
let result = arr.filter(num => num < 0);
console.log(result); 
// 2
let num=[5,10,15,20,22,23];
for(i=0;i<num.length;i++){
    if(num[i]%2!==0) num[i]=0; 
}
console.log(num)
// 3
// npm install readline-sync
// npm audit fix
const readline = require("readline-sync");
sum=0;
let num1;
while(true){
    num1= parseInt(readline.question(" Enter num: "));
    if(num1==0)break;
    sum+=num1;
}
console.log(sum)
// 5
sum=0;
for(i=1;i<=10;i++){
    console.log("previous",sum)
    sum=sum+i;
    console.log("current",sum, "\n");
}
// 6
let evenCount = 0;
let oddCount = 0;
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);





