const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector('button[type="submit"');
const theme = document.querySelector('.theme');
console.log(theme);
const root = document.querySelector(':root');
const patterns = {
  username: /^\w{5,12}$/,
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^$|^\d{10}$/,
  slug: /^$|^[a-z\d-]{8,20}$/,
};

function validate(input, regex) {
  return regex.test(input);
}

function show() {
  let checkbox = document.querySelector('input[type="checkbox"]');
  let password = document.querySelector('[name="password"]');
  if (checkbox.checked) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}

function allValid() {
  let ans = true;
  inputs.forEach((input) => {
    if (input.name == "showPassword") return;
    ans &&= validate(input.value, patterns[input.name]);
  });
  return ans;
}

inputs.forEach((input) => {
  if (input.name == "showPassword") return;
  input.addEventListener("keyup", (e) => {
    let validInput = validate(e.target.value, patterns[e.target.name]);
    if (validInput) {
      e.target.className = "valid";
    } else {
      e.target.className = "invalid";
    }
    if (allValid()) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "");
    }
  });
});
