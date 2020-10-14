function poundsToKilograms() {
    //INPUT from user text box
    let p = parseFloat(document.getElementById("pounds").value);
    let k = 0.45359237;
    //PROCESSING multiply user number by formula number
    let kgOutput = p * k;
    //OUTPUT display answer in the paragraph span to the user
    document.getElementById("outputKg").textContent = kgOutput.toFixed(1) + " Kilograms";
}