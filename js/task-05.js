const input = document.querySelector("#name-input");
const outputSpan = document.getElementById("name-output");
console.log(input);
console.log(outputSpan.textContent);

input.addEventListener("input", () => {
  let name = document.getElementById("name-input").value;
  if ((name === "")) {
    document.getElementById("name-output").innerHTML = "Anonymous";
  } else {
      document.getElementById("name-output").innerHTML = input.value
  }
});
