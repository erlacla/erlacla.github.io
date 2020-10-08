function addNumbers() {
    //INPUT -collect user input from both number text boxes.
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    //PROCESSING -parseFloat converts the string into numbers, then call the sum function to add the two numbers together.
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    let sum = number1 + number2;
    //OUTPUT -display the sum of number1 and number2.
    document.getElementById('output').innerHTML = "The sum of  " + number1 + " and " + number2 + " is..... " + sum;
}