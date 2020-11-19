function doInputOutput() {
    let temperature = document.getElementById("temperature").value;
    let windspeed = document.getElementById("windspeed").value;
    if (temperature <= 50 && windspeed >= 3) {
        let factor = windChill(temperature, windspeed);
        document.getElementById("output").innerHTML = factor + "℉";
    }
    else {
        alert("No Wind Chill");
    }
}
function windChill(tempF, speed) {
    let t = tempF;
    let s = speed;
    let f = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
    return f;
}