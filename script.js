function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function backspace() {
    let display = document.getElementById('screen');
    display.value = display.value.slice(0, -1);
}

function clearScreen() {
    // let display = document.getElementById('screen');
    // display.value = '';
    document.getElementById('screen').value = '';
}

function calculatePercent() {
    let display = document.getElementById('screen');
    let expression = display.value;

    let sign;
    if (expression.includes('+') || expression.includes('-')) alert("Invalid expression");
    if (expression.includes('+')) sign = '+';
    else sign = '-';

    const elements = expression.split(sign);
    let percent = elements[1];
    let out = eval(Number(elements[0]) + sign + elements[0] * percent / 100);
    display.value = out;
}

// let calculated = 0;
// let sign;
// let num = null;

// function calculate() {
//     try {
//         let expression = document.getElementById('screen').value;
//         // let sign;
//         // if ((expression.includes('+') || expression.includes('-'))) alert("Expression doesn't content + or -");
//         if (expression.includes('+')) sign = '+';
//         else sign = '-';

//         if (sign == "+" || sign == "-") {
//             num = (expression.split(sign))[1];
//             calculated = 1;
//         }

//         document.getElementById('screen').value = eval(document.getElementById('screen').value);
//         if (calculated == 1) {
//             document.getElementById('screen').value = Number(document.getElementById('screen').value) + sign + Number(num);
//         }
//     } catch (error) {
//         alert("Invalid expression");
//     }
// }

function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (error) {
        alert("Invalid expression");
    }
}

function sqrt() {
    let display = document.getElementById('screen');
    display.value = Math.sqrt(display.value);
}

function square() {
    let display = document.getElementById('screen');
    display.value = Math.pow(display.value, 2);
}

function changeSign() {
    let display = document.getElementById('screen');
    display.value = -display.value;
}

function factorial() {
    let display = document.getElementById('screen');
    let inputNum = eval(display.value);
    let outNum = 1;

    for (let i = 2; i <= inputNum; i++) {
        outNum *= i;
    }
    display.value = outNum;
}

function changeBackground() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    let color = "rgb(" + a + ", " + b + ", " + c + ")";
    document.querySelector("body").style.backgroundColor = color;
}

function changeScreen() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    let color = "rgb(" + a + ", " + b + ", " + c + ")";
    document.getElementById("screen").style.backgroundColor = color;
}