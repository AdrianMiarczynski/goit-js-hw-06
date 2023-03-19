const btnColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnColor.addEventListener("click", () => {
  colorSpan.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
