
function calculate() {

    //INPUT collect input from three text boxes and operand combo box.
        //Set variable answer and message.
    let number1 = parseFloat(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('number2').value);
    let userAnswer = parseFloat(document.getElementById('answer').value);
    let answer;
    let message;
    
    //PROCESSING use switch statement to set true math answers for each operend.
    //use if and else to set correct or incorrect message depending on == or !=.
    switch (operator) {
        case '+':
            answer = number1 + number2;
            break;
        case '-':
            answer = number1 - number2;
            break;
        case '*':
            answer = number1 * number2;
            break;
        case '/':
            answer = number1 / number2;
    }
    if (userAnswer == answer) {
        message = "Correct! 🏆"
    }
    else {
        message = "Incorrect 😢"
    }
//OUTPUT use getElementById to display correct or incorrect to user.
document.getElementById('output').innerHTML = message;
}