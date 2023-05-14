function notification() {
    alert("Hay nhap so");
}
//bai tap 1

var wageRate = 100000;
var result = document.getElementById("result");
var button = document.getElementById("btn-1");
button.onclick = function calSalary() {
    var inputValue = parseInt(document.getElementById("input1").value);
    var salary = inputValue * wageRate;
    if (!isNaN(salary)) {
        result.innerHTML = "So tien luong la " + salary;
    } else {
        notification();
    }
};
// bai 2

var btnCalAvg = document.getElementById("btn-2");
var resultAvg = document.getElementById("avg-result");
btnCalAvg.onclick = function calculateAverage() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var total =
        parseInt(num1) +
        parseInt(num2) +
        parseInt(num3) +
        parseInt(num4) +
        parseInt(num5);
    var average = total / 5;
    if (!isNaN(total)) {
        resultAvg.innerHTML = average;
    } else {
        notification();
    }
};
//bai 3
var btn3 = document.getElementById("btn-3");
btn3.onclick = function convertCurrency() {
    var usd = +document.getElementById("inputDollar").value;
    var vnd = document.getElementById("inputVnd");
    !isNaN(usd) ? (vnd.value = 23500 * usd) : notification();
};

//bai 4

var btn4 = document.getElementById("btn4");
btn4.onclick = function exercise4th() {
    var width = +document.getElementById("width").value;
    var height = +document.getElementById("lenght").value;
    var resultC = document.getElementById("result41");
    var resultS = document.getElementById("result42");
    if (!isNaN(width) && !isNaN(height) && width * height > 0) {
        resultC.innerHTML ="chu vi: " + (width + height) * 2;
        resultS.innerHTML ="dien tich: " + width * height;
    } else {
        notification();
    }
};
//bai5
var btn5 = document.getElementById("btn5");
btn5.onclick = () => {
    var inputNum = +document.getElementById("numberInput").value;
    var firstNum = Math.floor(inputNum / 10);
    var secondNum = inputNum % 10;
    var result5 = document.getElementById("result5");
    inputNum >= 10 && inputNum <= 99 
        ? (result5.innerHTML = firstNum + secondNum)
        : (result5.innerHTML = "hay nhap so co 2 chu so");
};
//controller
var btnpage1 = document.getElementById("page1");
var btnpage2 = document.getElementById("page2");
var btnpage3 = document.getElementById("page3");
var btnpage4 = document.getElementById("page4");
var btnpage5 = document.getElementById("page5");

var bai1 = document.getElementById("bai1");
var bai2 = document.getElementById("bai2");
var bai3 = document.getElementById("bai3");
var bai4 = document.getElementById("bai4");
var bai5 = document.getElementById("bai5");

btnpage1.onclick = () => {
    bai1.classList.remove("hidden");
    bai2.classList.add("hidden");
    bai3.classList.add("hidden");
    bai4.classList.add("hidden");
    bai5.classList.add("hidden");
};
btnpage2.onclick = () => {
    bai2.classList.remove("hidden");
    bai1.classList.add("hidden");
    bai3.classList.add("hidden");
    bai4.classList.add("hidden");
    bai5.classList.add("hidden");
};
btnpage3.onclick = () => {
    bai3.classList.remove("hidden");
    bai2.classList.add("hidden");
    bai1.classList.add("hidden");
    bai4.classList.add("hidden");
    bai5.classList.add("hidden");
};
btnpage4.onclick = () => {
    bai4.classList.remove("hidden");
    bai2.classList.add("hidden");
    bai3.classList.add("hidden");
    bai1.classList.add("hidden");
    bai5.classList.add("hidden");
};
btnpage5.onclick = () => {
    bai5.classList.remove("hidden");
    bai2.classList.add("hidden");
    bai3.classList.add("hidden");
    bai4.classList.add("hidden");
    bai1.classList.add("hidden");
};
