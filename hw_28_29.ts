//Задача 1
class Developer {
    firstName: string;

    constructor(name: string) {
        this.firstName = name;
    }

    startWork(): string {
        return this.firstName + " " + "start work";
    }

    endWork(): string {
        return this.firstName + " " + "end work";
    }
}
class Frontend extends Developer {
    websiteName: string | null = prompt('Введите название сайта');

    buildWebsite(): string {
        return this.firstName + ' ' + 'build website' + ' ' + `${this.websiteName}`;
    }
}
class Backend extends Developer {
    buildServer(): string {
        return this.firstName + ' ' + 'build server';
    }
}
let user = new Frontend('User');
console.log(user.startWork());
console.log(user.buildWebsite());
console.log(user.endWork());
let admin = new Backend('Admin');
console.log(admin.startWork());
console.log(admin.buildServer());
console.log(admin.endWork());

//Задача 2

class User {
    id: number = Date.now();
    isAdmin: boolean = false;
    name: string;
    surname: string;
    constructor(firstName: string, lastName: string) {
        this.name = firstName;
        this.surname = lastName;
    }
    showInfo():void {
        console.log(this.name + " " + this.surname);
    }
}
let alex = new User('Alexey', 'Gromov');
console.log(alex);
alex.showInfo();


//Задача 3
class Rectangle {
    width: string;
    height: string;
    color: string;

    constructor(width: string, height: string, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    rect(): void {
        let div: HTMLElement = document.createElement('div');
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.border = '2px solid black';
        div.style.backgroundColor = this.color;
        div.style.margin = '30px'
        div.style.overflow = 'hidden'
        document.body.prepend(div);

        let h3: HTMLElement = document.createElement('h3');
        h3.textContent = `S = ${parseFloat(this.height) * parseFloat(this.width)}`;
        h3.style.width = '100px'
        h3.style.textAlign = 'center'
        div.prepend(h3)
    }
}
let red = new Rectangle('120px', '300px', 'red');
let blue = new Rectangle('361px', '300px', 'blue');
let brown = new Rectangle('400px', '70px', 'brown');
let purple = new Rectangle('180px', '100px', 'purple');
red.rect();
blue.rect();
brown.rect();
purple.rect();



//Задача 4
let promise: Promise<string | void> = new Promise<string>((resolve: (value: string) => void) => {
    setTimeout(() => {
        const string: string = 'foo';
        resolve(string);
    }, 2000);
}).then((value: string) => {
    console.log(value);
});
