function doFV() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let y = parseFloat(document.getElementById("years").value);
    let periods = parseFloat(document.getElementById("periods").value);
    let futureValue = computeFutureValue(p, r, y, periods)
    document.getElementById("output").value = futureValue.toFixed(2);
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    let a = principal;
    let n = periodsPerYear;
    let y = years * n;
    let r = annualRate / n;

    return a * Math.pow((1 + r), y);
}
