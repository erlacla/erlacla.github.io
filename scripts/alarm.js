function alarm() {
    //INPUT get todays day, month, day of month, and day of week from computer's clock.
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    let output;
    //PROCESSING compare day of week to determine if it is a weekday or weekend.
    //set holidays with the && logial operator.
    if (dayOfWeek > 0 && dayOfWeek != 7) {
        output = "Get up";
    } else if (dayOfWeek == 0 || dayOfWeek == 7) {
        output = "Sleep in";
    } else if (month == 0 && dayOfMonth == 1) { //New Years
        output = "Sleep in";
    } else if (month == 6 && dayOfMonth == 4) { //4th of July
        output = "Sleep in";
    } else if (month == 11 && dayOfMonth == 25) { //Christmas
        output = "Sleep in";
    }
    
    //OUTPUT the correct message to the user by using thr Id embedded in the HTML code.
    document.getElementById("outputAlarm").innerHTML = output;
}