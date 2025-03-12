
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculate(a, b, operation) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error: Division by zero';
        default: return 'Error: Invalid operation';
    }
}
function startCalculator() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter second number: ', (num2) => {
            rl.question('Enter operation (+, -, *, /): ', (operation) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                if (isNaN(a) || isNaN(b)) {
                    console.log('Error: Invalid number input');
                } else {
                    console.log(`Result: ${a} ${operation} ${b} = ${calculate(a, b, operation)}`);
                }
                rl.close();
            });
        });
    });
}
startCalculator();
