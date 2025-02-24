// 1
function productsum(a,b){
    product=a*b;
    return (product>500)?a+b:product;
}
console.log(productsum(20,30));
// 2
function findgreatest(a,b,c){
    if (a>=b && a>=c){
        console.log("a is greatest");
    }else if(b>=a && b>=c){
        console.log("bis greatest");
    }else{
        console.log("c is greatest");
    }
}
findgreatest(10,25,15)
// 3
function removeDuplicates(arr) {
    return [new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

// 4
function removeElement(num, remove) {
    let num1= num.filter(eachNum => eachNum !== remove);
    while (num1.length<num.length){
        num1.push("_");
    }
    return num1;
}
let num = [3, 2, 2, 3];
let remove = 3;
console.log(removeElement(num, remove));
// 5
function Duplicate(num) {
    let set1=new Set(num);
    return set1.size !== num.length;
}
console.log(Duplicate([1, 2, 3, 1])); 
console.log(Duplicate([1, 2, 3, 4]));
// 6
function sumDigit(num) {
    let sum = 0;
    num = num.toString().split('');
    for (let i = 0; i < num.length; i++) { 
        sum = sum + Number(num[i]);
    }
    return sum; 
}
console.log(sumDigit(381)); 
// 7
function duplicateZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop(); 
            i++; 
        }
    }
}
let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
// 8
function intersection(num1, num2) {
    let set1 = new Set(num1);
    let set2 = new Set(num2); 
    return [...set1].filter(num => set2.has(num)); 
}
console.log(intersection([4,9,5], [9,4,9,8,4])); 


