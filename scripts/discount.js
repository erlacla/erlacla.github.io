function calculateDiscount() {
    //INPUT get day of week from computer's clock, get user's subtotal amount 
    //from the input box, and change it to a number value with parseFloat. 
    var dayOfWeek = new Date().getDay();
    let userSubTotal = parseFloat(document.getElementById('subTotal').value);
    //PROCESSING Use logical operator to determine if user number is 
    //greater than or equal to 50, and if it's tuesday or wednesday 
    //then assign discount to this condition.
    //Determine tax rate for regular subtotal or discounted subtotal.
    //Add tax to subtotals.
    if (userSubTotal >= 50 && dayOfWeek == 2 || dayOfWeek == 3) {
        discountRate = 0.1;
    } else {
        discountRate = 0;
    }
    let discount = userSubTotal * discountRate;
    let tax = userSubTotal * 0.06;
    let output = (userSubTotal - discountRate) + tax;
    //OUTPUT the adjusted total to user by using the id embedded in the HTML.
    document.getElementById("output").innerHTML = output.toFixed(2);

}