function doPayment() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let y = parseFloat(document.getElementById("years").value);
    let z = parseFloat(document.getElementById("paymentsPerYear").value);
    let payment = computePayment(p, r, y, z);
    document.getElementById("outputPayment").innerHTML = payment.toFixed(2),
    document.getElementById("paymentPiece").value = payment.toFixed(2); 
}

function doBalance() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let d = parseFloat(document.getElementById("paidToDate").value);
    let pay = parseFloat(document.getElementById("paymentPiece").value);
    let balance = computeBalance(p, r, d, pay);
    document.getElementById("outputPayoff").innerHTML = balance.toFixed(2);
}
function computePayment(principal, annualRate, years, periodsPerYear) {
    let p = principal;
    let r = annualRate / 12;
    let n = years * periodsPerYear;

    return (p * r) / (1 - 1 / (Math.pow((1 + r), n)));
}
function computeBalance(principal, annualRate, numberOfPaymentPaidToDate, paymentAmount) {
    let a = principal;
    let r = annualRate / 12;
    let d = numberOfPaymentPaidToDate;
    let p = paymentAmount;
    return  a * (Math.pow((1 + r), d)) - (p * ((Math.pow((1 + r), d))-1)/r);
}