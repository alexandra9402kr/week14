let summa = () => {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = Number(a) + Number(b);
    document.getElementById("result").innerHTML = result;
}

let minus = () => {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = a - b;
    document.getElementById("result").innerHTML = result;
}

let multiplication = () => {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = a * b;
    document.getElementById("result").innerHTML = result;
}

let division = () => {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = a / b;
    document.getElementById("result").innerHTML = result;
}