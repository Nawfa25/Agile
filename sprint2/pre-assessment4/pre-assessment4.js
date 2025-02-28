// 1
function StrongPassword(password) {
    let minLength = password.length >= 8;
    let hasLowercase = /[a-z]/.test(password);
    let hasUppercase = /[A-Z]/.test(password);
    let hasDigit = /\d/.test(password);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
}
console.log(StrongPassword("Pass@123")); 
console.log(StrongPassword("weakpass")); 
// 2
function processArray(nums, operation) {
    if (operation === "Add") {
        return nums.flat().reduce((sum, num) => sum + num, 0);
    } else if (operation === "String") {
        return nums.flat();
    } else {
        return "Invalid operation";
    }
}
console.log(processArray([[1, 2], [3, 4]], "Add"));  
console.log(processArray([[23, 98], [42, 70]], "String")); 
// 3
let arr1=[5, 10, 20, 2, 0, 33, 100, 90];
let i=0, temp=[], sum1;
while (i<arr1.length){
    sum1=0;
    temp.push(arr1[i],arr1[i+1]);
    sum1 = arr1[i] + arr1[i+1];
    temp.push(sum1);
    i+=2;
}
console.log("Original array :", arr1, "\nPattern :", temp)
// 4
function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
    return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12])); 
// 5
function removeSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') { 
            result += str[i];
        }
    }
    return result;
}
console.log(removeSpaces("Hey! yo! wasupp!"));
// 6
function swapNumbers(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
    a = a ^ b;
    b = a ^ b; 
    a = a ^ b;
    console.log("After Swap: a =", a, ", b =", b);
}
swapNumbers(5, 10);
// 7
function Anagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(Anagrams("listen", "silent")); 

