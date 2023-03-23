const createBtn = document.querySelector("button[data-create]");
const deleteBtn = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
let inputEl = document.querySelector("input[type=number]");
console.log(inputEl);

//generowanie koloru
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// wartość początkowa i zmienne
const divFirstValue = 30;
let divValue = 30;
let divSize = 10;

//

// tworzenie obiektu z losowym kolorem
const createBoxes = () => {
  let inputValue = inputEl.value;
  for (let i = 0; i < inputValue; i++) {
    let divEl = document.createElement("div");
    divEl.style.width = `${divValue}px`;
    divEl.style.height = `${divValue}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    box.append(divEl);
    divValue += divSize;
  }
};

// usuwanie divów
const destroyBoxes = () => {
  // box.remove();
  box.textContent = "";
  inputEl.value = "";
};

// wywoływanie funkcji
createBtn.addEventListener("click", createBoxes);
deleteBtn.addEventListener("click", destroyBoxes);
