let middleNumber = '';
let onlyOne = 0;
let number1 = 0;
let number2 = 0;
let num = 0;
let i = 1;
let j = 1;
let total = 0;
let operations = '';
document.addEventListener("DOMContentLoaded", () => {
    const add = document.querySelector(".add");
    const sub = document.querySelector(".sub");
    const mul = document.querySelector(".mul");
    const div = document.querySelector(".div");
    const clear = document.querySelector(".clear");
    add.addEventListener("mousedown", () => {
        if (onlyOne === 1) {
            if (j === 1) {
                number1 = num;
            }
            let display = document.querySelector(".result");
            display.append("+");
            middleNumber = '';
            num = 0;
            onlyOne = 0;
        }
    });
    sub.addEventListener("mousedown", () => {
        if (onlyOne === 1) {
            if (j === 1) {
                number1 = num;
            }
            let display = document.querySelector(".result");
            display.append("-");
            middleNumber = '';
            onlyOne = 0;
        }
    });
    mul.addEventListener("mousedown", () => {
        if (onlyOne === 1) {
            if (j === 1) {
                number1 = num;
            }
            let display = document.querySelector(".result");
            display.append("*");
            middleNumber = '';
            onlyOne = 0;
        }
    });
    div.addEventListener("mousedown", () => {
        if (onlyOne === 1) {
            if (j === 1) {
                number1 = num;
            }
            let display = document.querySelector(".result");
            display.append("/");
            middleNumber = '';
            onlyOne = 0;
        }
    });
    clear.addEventListener("mousedown", () => {
        let display = document.querySelector(".result");
        display.innerHTML = '';
    });
});

function number(n) {
    if (i != 0) {
        let display = document.querySelector(".result");
        display.append(parseInt(`${n}`));
        middleNumber = middleNumber + `${n}`;
        num = parseInt(middleNumber);
        onlyOne = 1;
        return num;
    }
}
function equals() {
    let display = document.querySelector(".result");
    number2 = num;
    switch (operations) {
        case '+':
            total = number1 + number2;
            display.innerHTML = total;
            operations = '';
            break;
        case '-':
            total = number1 - number2;
            display.innerHTML = total;
            operations = '';
            break;
        case '*':
            total = number1 * number2;
            display.innerHTML = total;
            operations = '';
            break;
        case '/':
            if (number2 === 0) {
                display.innerHTML = "Pagal H Kya!";
                document.addEventListener("click", function(event) {
                    if (event.target.tagName === "DIV" && event.target.id !== "allowedButton") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }, true);
            } else {
                total = number1 / number2;
                display.innerHTML = total;
            }
            operations = '';
            break;
    }
    middleNumber = '';
    number1 = total;
    number2 = 0;
    j = 0;
}
function operator(symbol) {
    operations = symbol;
}