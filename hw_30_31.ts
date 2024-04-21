//Задание 1//
const xhr: XMLHttpRequest = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
  let users: any[] = xhr.response;
  users.forEach((el: { name: string }) => {
    console.log(el.name);
  });
};

//Задание 2//
const titleText = document.querySelector("#title");
const text: HTMLInputElement | null = document.querySelector("#text");
const add: HTMLButtonElement | null = document.querySelector("#add");
const count: HTMLElement | null = document.querySelector("#count");
const area: HTMLElement | null = document.querySelector("#area");

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
}).then((response) => {
  if (response.ok && response.status === 200) {
    return response.json();
  }
  throw new Error();
}).catch(() => {
  const div: HTMLDivElement = document.createElement("div");
  const h2: HTMLHeadingElement = document.createElement("h2");
  div.style.border = "2px solid black";
  h2.textContent = "Что-то пошло не так, попробуйте позже!";
  div.append(h2);
  document.body.append(div);
}).then((value: Post[]) => {
  value.forEach((user) => {
    if (count) count.textContent = `Количество постов ${value.length}`;
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    div.style.border = "2px solid black";
    div.style.padding = "10px";
    h3.style.fontSize = "25px";
    p.style.fontSize = "20px";
    h3.textContent = user.title;
    p.textContent = user.body;
    if (area) {
      area.append(div);
    }
  });

  if (add) {
    add.addEventListener("click", (event) => {
      event.preventDefault();
      if (titleText && text && area) {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        div.style.border = "2px solid black";
        div.style.padding = "10px";
        h3.style.fontSize = "25px";
        p.style.fontSize = "20px";
        p.textContent = text.value;
        div.append(h3);
        div.append(p);
        area.prepend(div);
        if (count) {
          count.textContent = `Количество постов ${value.length}`;
        }
      }
    });
  }
});