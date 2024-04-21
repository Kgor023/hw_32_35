const input: HTMLInputElement | null = document.querySelector("#text");
const deleate: HTMLButtonElement | null = document.querySelector("#deleate");
const seven: HTMLButtonElement | null = document.querySelector("#seven");
const eight: HTMLButtonElement | null = document.querySelector("#eight");
const nine: HTMLButtonElement | null = document.querySelector("#nine");
const multiply: HTMLButtonElement | null = document.querySelector("#multiply");
const four: HTMLButtonElement | null = document.querySelector("#four");
const five: HTMLButtonElement | null = document.querySelector("#five");
const six: HTMLButtonElement | null = document.querySelector("#six");
const divide: HTMLButtonElement | null = document.querySelector("#divide");
const one: HTMLButtonElement | null = document.querySelector("#one");
const two: HTMLButtonElement | null = document.querySelector("#two");
const three: HTMLButtonElement | null = document.querySelector("#three");
const sum: HTMLButtonElement | null = document.querySelector("#sum");
const point: HTMLButtonElement | null = document.querySelector("#point");
const zero: HTMLButtonElement | null = document.querySelector("#zero");
const hist: HTMLButtonElement | null = document.querySelector("#history");
const historyBlock: HTMLElement | null = document.querySelector(".history");
const diff: HTMLButtonElement | null = document.querySelector("#diff");
const cancel: HTMLButtonElement | null = document.querySelector("#cancel");
const result: HTMLButtonElement | null = document.querySelector("#result");

if (input && deleate && seven && eight && nine && multiply && four && five && six && divide && one && two && three && sum && point && zero && hist && historyBlock && diff && cancel && result) {
    zero.addEventListener("click", () => {
        if (input) input.value += "0";
    });

    one.addEventListener("click", () => {
        if (input) input.value += "1";
    });

    two.addEventListener("click", () => {
        input.value += "2";
    });
    three.addEventListener("click", () => {
        input.value += "3";
    });
    four.addEventListener("click", () => {
        input.value += "4";
    });
    five.addEventListener("click", () => {
        input.value += "5";
    });
    six.addEventListener("click", () => {
        input.value += "6";
    });
    seven.addEventListener("click", () => {
        input.value += "7";
    });
    eight.addEventListener("click", () => {
        input.value += "8";
    });
    nine.addEventListener("click", () => {
        input.value += "9";
    });
    point.addEventListener("click", () => {
        input.value += ".";
    });
    sum.addEventListener("click", () => {
        input.value += "+";
    });
    divide.addEventListener("click", () => {
        input.value += "/";
    });
    diff.addEventListener("click", () => {
        input.value += "-";
    });
    multiply.addEventListener("click", () => {
        input.value += "*";
    });
    cancel.addEventListener("click", () => {
        input.value = "";
    });
    deleate.addEventListener("click", () => {
        input.value = input.value.slice(0, input.value.length - 1);
    });
    result.addEventListener("click", () => {
        historyBlock.innerHTML += `<h4>${input.value} = ${eval(input.value)}</h4>`;
        input.value = eval(input.value);
    });
    hist.addEventListener("click", () => {
        if (historyBlock.style.display == "block") {
            historyBlock.style.display = "none";
        } else {
            historyBlock.style.display = "block";
        }
    });

    window.addEventListener("keydown", (event: KeyboardEvent) => {
        if (input) {
            switch (event.key) {
                case "1":
                    input.value += "1";
                    break;
                case "2":
                    input.value += "2";
                    break;
                case "3":
                    input.value += "3";
                    break;
                case "4":
                    input.value += "4";
                    break;
                case "5":
                    input.value += "5";
                    break;
                case "6":
                    input.value += "6";
                    break;
                case "7":
                    input.value += "7";
                    break;
                case "8":
                    input.value += "8";
                    break;
                case "9":
                    input.value += "9";
                    break;
                case "-":
                    input.value += "-";
                    break;
                case "+":
                    input.value += "+";
                    break;
                case "*":
                    input.value += "*";
                    break;
                case "/":
                    input.value += "/";
                    break;
                case "0":
                    input.value += "0";
                    break;
                case "Enter":
                    if (historyBlock) {
                        historyBlock.innerHTML += `<h4>${input.value} = ${eval(input.value)}</h4>`;
                        input.value = eval(input.value);
                    }
                    break;
                case "Backspace":
                    if (input) input.value = input.value.slice(0, input.value.length - 1);
                    break;
            }
        }
    });
}