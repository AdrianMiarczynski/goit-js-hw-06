const inputEl = document.getElementById("validation-input");
console.log(inputEl.dataset);

inputEl.addEventListener("blur", () => {
  inputEl.value.length <= inputEl.dataset.length
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
});
