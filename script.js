//addition
function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = " " + num1 + " + " + num2 + " = " + result;
}

//subtraction
function subtract(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = num1 + " - " + num2 + " = " + result;
}

//multiplication
function multiply(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = num1 + " * " + num2 + " = " + result;
}

//division
function divide(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = num1 + " / " + num2 + " = " + result;
}

//modulus
function modulus(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 % num2;
    document.getElementById("result").innerHTML = num1 + " % " + num2 + " = " + result;
}
