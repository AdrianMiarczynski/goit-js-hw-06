const counterValue = document.getElementById("value");
console.log(counterValue);
const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
console.log(btnDecrement);
console.log(btnIncrement);
let counter = 0;
btnIncrement.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
  console.log(counter);
});
btnDecrement.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
  console.log(counter);
});
