function sumOdds() {
    //INPUT Get input from textbox, convert to a number value, and assign it to n.
    //Start the sum at 0.
    let n = parseFloat(document.getElementById('userInteger').value);
    let oddSum = 0;
    //PROCESSING create for loop that will start at 1 and add 1 until it reaches the user number.
    for (let i = 1; i <= n; i++)
    //use the modulus operator to find odd numbers. Use if and else statements to add odd numbers to oddSum or not.
        if (i % 2 != 0) {
            oddSum += i;
        } 
     //OUTPUT use document.getElementById to display oddSum to user after loop reaches the sentinel (user input number).   
        document.getElementById("output").innerHTML = oddSum;
}