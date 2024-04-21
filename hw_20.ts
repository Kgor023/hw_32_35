
interface Calc {
    a: number;
    b: number;
    c: number;
    d: number;
    read(): void;
    convert(): void;
    sum(): number;
    mul(): number;
}

function Calculator() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.read = function() {
        this.a = prompt("Введите 1 число");
        this.b = prompt("Введите 2 число");
    };

    this.convert = function() {
        this.c = Number(this.a);
        this.d = Number(this.b);
    };

    this.sum = function() {
        return this.c + this.d;
    };

    this.mul = function() {
        return this.c * this.d;
    };
}

const calculator: Calc = new Calculator();
calculator.read();
calculator.convert();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


// Задание 2
type TextFormatType = {
    text: string;
    listSymbols: string[];
    getText: () => void;
    check: () => boolean;
    add: () => string;
};
function TextFormat() {
    this.text = "";
    this.listSymbols = ["/", "*", "_"];

    this.getText = function() {
        this.text = prompt("Введите текст") || "";
    };

    this.check = function(): boolean {
        let found:boolean = false;
        for (let i:number = 0; i < this.listSymbols.length; i++) {
            if (this.text.includes(this.listSymbols[i])) {
                found = true;
            }
        }
        return found;
    };

    this.add = function(): string {
        this.startText = prompt("Введите текст который нужно вставить в начале") || "";
        this.middleText = prompt("Введите текст который нужно вставить в середине") || "";
        this.endText = prompt("Введите текст который нужно вставить в конце") || "";
        this.middleText =
            this.text.slice(0, this.text.length / 2) +
            this.middleText +
            this.text.slice(this.text.length / 2);
        this.text = this.startText + this.middleText + this.endText;
        return this.text;
    };
}
let formatText:TextFormatType = new TextFormat();
formatText.getText();
console.log(formatText.check());
console.log(formatText.add());