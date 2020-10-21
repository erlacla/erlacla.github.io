
function shoesFunction() {
    
    //INPUT get selection from combo box
    let weather = document.getElementById('weather-select').value;
    let shoes;
    //PROCESSING connect weather to shoe type
    if (weather == "hot") {
        shoes = "Sandals";
    } else if (weather == "rain") {
        shoes = "Galoshes";
    } else if (weather == "snow") {
        shoes = "Boots";
    } else if (weather == "unknown") {
        shoes = "Shoes";
    }

    //OUTPUT display shoe type to user
    document.getElementById("outputShoe").innerHTML = shoes;
}
