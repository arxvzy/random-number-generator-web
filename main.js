const input = document.getElementById("randominput");
const output = document.getElementById("randomoutput");
const inputmin = document.getElementById("min");
const inputmax = document.getElementById("max");

input.addEventListener("click", () => {
  output.textContent = Math.floor(
    Math.random() * (Number(inputmax.value) - Number(inputmin.value) + 1) +
      Number(inputmin.value)
  );
});
