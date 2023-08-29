let root = document.querySelector(":root");
let theme = document.querySelector("#theme");
theme.addEventListener("change", (event) => {
  root.className = event.target.value;
});
