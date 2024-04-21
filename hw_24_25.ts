const inputX: HTMLInputElement | null = document.querySelector("#input_x");
const inputY: HTMLInputElement | null = document.querySelector("#input_y");
const btn: HTMLButtonElement | null = document.querySelector("#create");
const board: HTMLElement | null = document.querySelector(".board");

if (inputX && inputY && btn && board) {
  btn.addEventListener("click", () => {
    for (let i = 1; i <= parseInt(inputX.value); i++) {
      const tr = document.createElement("tr");
      for (let j = 1; j <= parseInt(inputY.value); j++) {
        const td = document.createElement("td");
        td.className = "tdElem";
        if ((i + j) % 2 === 0) {
          td.classList.toggle("black");
        } else {
          td.classList.toggle("white");
        }
        tr.append(td);
      }
      if (board) board.append(tr);
    }
  });

  if (board) {
    board.addEventListener("click", (event: MouseEvent) => {
      const tdBlock = document.querySelectorAll(".tdElem");
      if (event.target instanceof HTMLElement && event.target.classList.contains("tdElem")) {
        for (let i = 0; i < tdBlock.length; i++) {
          if (tdBlock[i].classList.contains("black")) {
            tdBlock[i].classList.remove("black");
            tdBlock[i].classList.add("white");
          } else {
            tdBlock[i].classList.remove("white");
            tdBlock[i].classList.add("black");
          }
        }
      }
    });
  }
}