// 1
for(let i=1;i<=10;i++){
    console.log(i);
}
// 2
for(let i=2;i<=20;i+=2){
    console.log(i);
}
// 3
for(let i=1;i<=20;i+=2){
    console.log(i);
}
// 4
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
    fact*=i;
}
return fact;
}
console.log(factorial(5));
// 5
    let sum=0;
    for(i=0;i<=100;i++){
        sum+=i;
    }
console.log(sum);
// 6
function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
        return sum/arr.length;
}
let nums = [10, 20, 30, 40, 50];
console.log("Average:", average(nums));
// 7
function printsquare(size){
    for(let i=0;i<size;i++){
        row="";
    for(let j=0;j<size;j++){
        row+="*";
        }
        console.log(row);
    }
}
printsquare(5);
// 8
for(let i=1;i<=5;i++){
    console.log(i);
}
// 9
for(let i=1;i<=10;i++){
    console.log(i);
}
// 10
function firstandlastsame(arr){
    if(arr.length==0){
        return "array is empty";
    }
    return arr[0]==arr[arr.length-1];
}
console.log(firstandlastsame([10,20,30,40,10]));
// 11
function divisiblebyfive(arr){
    for(let i=0;i<arr.length;i++){
        if (arr[i] % 5 === 0){
            console.log(arr[i]);
        }
    }
}
let numbers=[10,28,37,50];
divisiblebyfive(numbers);
// 12
function checkChar(char){
    let vowels = "aeiouAEIOU";
    if (vowels.includes(char)){
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
}
checkChar('A');
checkChar('z'); 
// 13
function countevenodd(a,b){
    let evencount=0,oddcount=0;
    for (let i=a;i<=b;i++){
        if(i%2==0){
            evencount++;
        }else {
            oddcount++;
        }
    }
console.log("evencount");
console.log("oddcount");
}
countevenodd(10,55);
// 14
for (let i = 1; i <= 25; i++) {
    if (i % 5 !== 0) {
        console.log(i);
    }
}
// 15
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
    fact*=i;
}
return fact;
}
function factorialofarray(arr){
    return arr.map(factorial);
}
let num1=[5,7,4];
console.log(factorialofarray(num1));
// 16
function productorsum(a,b){
let product=a*b;
return product>500 ? a+b :product;
}
console.log(productorsum(10,60));
// 17
function findgreatest(a,b){
return a>b ? a:b;
}
console.log(findgreatest(10,25));
// 18
function findgreatest2(a,b,c){
    if (a>=b && a>=c){
        console.log("a is greatest");
    }else if(b>=a && b>=c){
        console.log("b is greatest");
    }else{
        console.log("c is greatest");
    }
}
findgreatest2(10,25,15)
// 19
function separateNumbers(arr) {
    let positiveNumbers = arr.filter(num => num >= 0);
    let negativeNumbers = arr.filter(num => num < 0);

    console.log("Positive Numbers:", positiveNumbers);
    console.log("Negative Numbers:", negativeNumbers);
}
let x= [10, -5, 20, 0, -25];
separateNumbers(x);
