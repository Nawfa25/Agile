// 1
function checknumber(num){
    if (num>0){
        return "positive";
    }else  if (num<0){
       return "negative";
    }else{
        return "zero";
    }
    }
    console.log(checknumber(3))
    console.log(checknumber(-3))
    // 2
    function num(n){
        if (num%2==0){
            return "even";
        }else{
           return "odd";
        }
    }
        console.log(num(3))
        // 3
        function power(base, exponent) {
            return Math.pow(base, exponent);
        }
        console.log(power(5, 2));
        console.log(power(3, 3));  
        // 4
        function compareNumbers(a, b) {
            if (a > b) {
                console.log(`${a} is greater than ${b}`);
            } else if (a < b) {
                console.log(`${b} is greater than ${a}`);
            } else {
                console.log(`${a} and ${b} are equal`);
            }
        }
        compareNumbers(10, 5); 
        compareNumbers(3, 8);  
        compareNumbers(7, 7);   
        // 5
        function leapyear(year){
            if((year % 4==0&& year % 100!==0)|| (year %400==0)){
                console.log("year is a leapyear");
            }
            else{
                console.log("year is not a leap year");
            }
        }
         leapyear(2024)
         leapyear(2023)
        // 6
        function assignGrade(score) {
            if (score >= 90 && score <= 100) {
                console.log("Grade: A");
            } else if (score >= 80 && score < 90) {
                console.log("Grade: B");
            } else if (score >= 70 && score < 80) {
                console.log("Grade: C");
            } else if (score >= 60 && score < 70) {
                console.log("Grade: D");
            } else {
                console.log("Grade: F");
            }
        }
        assignGrade(95); 
        assignGrade(85); 
        assignGrade(75); 
        assignGrade(65); 
        assignGrade(50); 
        // 7
        function ageMessage(age) {
            if (age < 16) {
                console.log("You can't drive.");
            } else if (age >= 16 && age <= 17) {
                console.log("You can drive but not vote.");
            } else if (age >= 18 && age <= 24) {
                console.log("You can vote but not rent a car.");
            } else {
                console.log("You can do anything legally.");
            }
        }
        ageMessage(15); 
        ageMessage(16); 
        ageMessage(20); 
        ageMessage(30); 
        // 8
        function fizzBuzz(n) {
            for (let i = 1; i <= n; i++) {
                console.log(
                    (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
                    (i % 3 === 0) ? "Fizz" :
                    (i % 5 === 0) ? "Buzz" :
                    i
                );
            }
        }
        fizzBuzz(100);
        // 9
        function leapyear(year){
            if((year % 4==0&& year % 100!==0)|| (year %400==0)){
                console.log("year is a leapyear");
            }
            else{
                console.log("year is not a leap year");
            }
        }
         leapyear(2024)
         
   
