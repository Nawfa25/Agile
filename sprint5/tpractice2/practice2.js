  // task1
function replaceSubstring(inputStr, target, replacement) {
    return inputStr.replaceAll(target, replacement);
  }
  
  // Ex
  const input = 'apple banana apple grape apple';
  const target = 'apple';
  const replacement = 'orange';
  
  const output = replaceSubstring(input, target, replacement);
  console.log(output);  
  
 //task2
 function containsValue(arr, value) {
    return arr.includes(value);
  }
  
  // Ex
  const fruits = ['apple', 'banana', 'cherry'];
  const searchValue = 'banana';
  
  const result = containsValue(fruits, searchValue);
  console.log(result);
  
 // task3
 async function fetchData(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Ex
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  fetchData(url);
  
  //task4
  function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    } catch (error) {
      return error.message;
    }
  }
  
  // Ex
  console.log(divideNumbers(4, 2));
  console.log(divideNumbers(5, 0)); 
  
  // task5
  function introducePerson(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  
  // Ex
  console.log(introducePerson('John', 30));
  
 // task6
 function logPersonDetails(person) {
    const { name, age, city } = person;
    console.log(name);
    console.log(age);
    console.log(city);
  }
  
  // Ex
  const person = { name: 'Alice', age: 25, city: 'New York' };
  logPersonDetails(person);
  
  // task7
  function addNumbers(a, b = 10) {
    return a + b;
  }
  
  // Ex
  console.log(addNumbers(5, 15)); 
  console.log(addNumbers(5));   

  // task8
  function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Ex
  console.log(sumAll(1,2,3,4,5,6)); 
  
  // task9
  function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Ex
  console.log(sumArray([1, 2, 3, 4, 5])); 
  
  
