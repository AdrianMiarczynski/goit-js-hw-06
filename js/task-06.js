const inputEl = document.getElementById("validation-input");
console.log(inputEl.dataset);

inputEl.addEventListener("blur", () => {
  inputEl.value.length === +inputEl.dataset.length
    ? inputEl.className = "valid"
    : inputEl.className ="invalid";
});
