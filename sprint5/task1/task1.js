// task1
function squareNumbersTraditional(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i]);
  }
  return result;
}

// Arrow function 
const squareNumbersArrow = (numbers) => {
  return numbers.map(num => num * num);
};
const input = [1, 2, 3, 4, 5];

const traditionalOutput = squareNumbersTraditional(input);
const arrowOutput = squareNumbersArrow(input);

console.log("Example Input:", input);
console.log("Output using Traditional Function:", traditionalOutput);
console.log("Output using Arrow Function:", arrowOutput);

// task2
function mergeObjects(obj1, obj2, obj3) {
    return { ...obj1, ...obj2, ...obj3 };
  }
    const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  
  const mergedObject = mergeObjects(obj1, obj2);
    console.log("Merged Object:", mergedObject);
  
//task3
function mergeObjects(obj1, obj2, obj3) {
    return { ...obj1, ...obj2, ...obj3 };
  }
  
  const obja = { a: 1, b: 2 };
  const objb = { c: 3, d: 4 };
  const objc = { e: 5, f: 6 };
  
  const mergedObject1 = mergeObjects(obja, objb, objc);
    console.log("Merged Object:", mergedObject1);

//task4
function getUniqueNumbers(numbers) {
    return [...new Set(numbers)];
    }
    const input1 = [1, 2, 2, 3, 4, 4, 5];
    
    const uniqueNumbers = getUniqueNumbers(input1);
    
    console.log("Example Input:", input1);
    console.log("Unique Numbers:", uniqueNumbers);

//task5
function filterLongWords(words) {
    return words.filter(word => word.length > 5);
  }
  
  const input2 = ['apple', 'banana', 'cherry','fig', 'grape'];
  
  const longWords = filterLongWords(input2);
    console.log("Example Input:", input2);
  console.log("Words with more than 5 letters:", longWords);

//task6
function getProduct(numbers) {
    return numbers.reduce((accumulator, current) => accumulator * current, 1);
  }
    const input3 = [1, 2, 3, 4, 5];
    const output = getProduct(input3);
  
  console.log("Example Input:", input3);
  console.log("Product of all numbers:", output);
  
  //task7
  function findFirstAndLast(arr, target) {
    const firstIndex = arr.indexOf(target);
    const lastIndex = arr.lastIndexOf(target);
    return {
      first: firstIndex,
      last: lastIndex
    };
  }
    const numbers = [1, 2, 3, 2, 4, 2, 5];
  const target = 2;
    const result = findFirstAndLast(numbers, target);
  
  console.log("Example Input:", numbers);
  console.log(`First and last occurrence of ${target}:`, result);
  
  
      
  
