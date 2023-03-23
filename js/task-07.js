const InputEl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");
console.log(InputEl.value);
console.log(spanText.textContent);
spanText.style.fontSize = `${InputEl.value}px`;

InputEl.addEventListener("input", () => {
  // spanText.style.fontSize = InputEl.value + "px";
  spanText.style.fontSize = `${InputEl.value}px`;
});
