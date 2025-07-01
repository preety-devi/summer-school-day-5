let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter  second number:"));
let operation = prompt("Choose operation: +, -, *, /");
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero";
        }
        break;
    default:
        result = "Invalid operation";
}
alert("Result: " + result);
