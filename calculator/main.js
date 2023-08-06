// ÷ ×
// Random no. between 56 and 255
// lower limit is 56 to avoid dark colors
function randomNumber() {
  return Math.floor(56 + Math.random() * 200);
}
// to replace at a given index with replacement
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.slice(0, index) + replacement + this.slice(index + replacement.length)
  );
};

function getOperator(value) {
  if (value == "add") return "+";
  else if (value == "subtract") return "-";
  else if (value == "multiply") return "×";
  else if (value == "divide") return "÷";
  else if (value == "percent") return "%";
  else if (value == "equal") return "=";
}

// to check previous entity was a Integer
function isInteger(str) {
  let i = str.length - 1;
  while (i >= 0) {
    if (str.charAt(i) == ".") return false;
    else if (str.charAt(i) == " " || str.charAt(i) == "-") break;
    i--;
  }
  return true;
}

// to check number length

function numberLen(str) {
  let i = str.length - 1,
    ans = 0;
  while (i >= 0) {
    if (str.charAt(i) == ".");
    else if (str.charAt(i) == " ")
      // do nothing
      break;
    i--;
    ans++;
  }
  return ans;
}

function updatePrimaryScreen(value) {
  console.log(value);

  // clear the screen
  if (value == "clear") {
    screenPrimary.textContent = "";
    screenSecondary.textContent = ""; // OR updateSecondaryScreen();
  }

  // delete digits 1 by one or complete operator at once
  else if (value == "delete") {
    if (screenPrimary.textContent.slice(-1) == " ")
      screenPrimary.textContent = screenPrimary.textContent.slice(0, -3);
    else if (screenPrimary.textContent.slice(-1) == ")") {
      while (
        screenPrimary.textContent.slice(-1) != "" &&
        (screenPrimary.textContent.slice(-2, -1) != " " ||
          screenPrimary.textContent.slice(-1) != "(")
      )
        screenPrimary.textContent = screenPrimary.textContent.slice(0, -1);
      screenPrimary.textContent = screenPrimary.textContent.slice(0, -1);
    } else screenPrimary.textContent = screenPrimary.textContent.slice(0, -1);
  }

  // add digit to the screen
  else if (value.search(/[0-9]/) != -1) {
    if (screenPrimary.textContent.slice(-1) == ")");
    else if (numberLen(screenPrimary.textContent) < 15)
      //do nothing
      screenPrimary.textContent += value;
    else {
      let str = screenPrimary.textContent;
      screenPrimary.textContent = "Max digit limit is 15 ";
      let delayInMilliseconds = 1000; //1 second
      setTimeout(function () {
        screenPrimary.textContent = str;
      }, delayInMilliseconds);
    }
  }

  // add dot to the screen
  else if (value == "dot") {
    // Add inital 0 if previous entity was a operator or empty string
    if (screenPrimary.textContent.slice(-1) == ")");
    else if (
      screenPrimary.textContent.slice(-1) == "" ||
      screenPrimary.textContent.slice(-1) == " "
    ) {
      // do nothing
      screenPrimary.textContent += "0.";
    } else if (isInteger(screenPrimary.textContent)) {
      screenPrimary.textContent += ".";
    }
  }

  // changing sign of number
  else if (value == "sign") {
    let str = screenPrimary.textContent;
    let i = str.length - 1;
    if (i == -1) {
      //do nothing
    } else {
      let exist = 0; //number whose sign is being inverted
      while (i >= 0) {
        if (str.charAt(i) == " ") break;
        exist = 1;
        i--;
      }
      if (exist)
        screenPrimary.textContent =
          str.slice(0, i + 1) + "(-" + str.slice(i + 1, str.length) + ")";
      else {
        //do nothing
      }
    }
  }

  // equal operator
  else if (value == "equal") {
    screenPrimary.textContent = screenSecondary.textContent;
  }

  // add operator to the screen
  else if (
    value == "add" ||
    value == "subtract" ||
    value == "divide" ||
    value == "multiply" ||
    value == "percent"
  ) {
    let op = getOperator(value);
    // if screen is empty allow only + or -
    if (screenPrimary.textContent.slice(-1) == "") {
      if (op == "+" || op == "-") screenPrimary.textContent += ` ${op} `;
      // else do nothing (must have a left operand for other operators)
    }
    // if previous entitity is a operator replace it with new operator
    else if (screenPrimary.textContent.slice(-1) == " ")
      screenPrimary.textContent = screenPrimary.textContent.replaceAt(-2, op);
    // otherwise add the operator itself
    else screenPrimary.textContent += ` ${op} `;
  }
}

function evaluate(expr) {
  //TO DO: evaluate a (hopefully) valid expression
  if (screenPrimary.textContent == "") return "";
  return "(Not implemented)";
}

let screenPrimary = document.querySelector(".screen-primary");
let screenSecondary = document.querySelector(".screen-secondary");
let keys = [...document.querySelectorAll(".key")];

screenPrimary.textContent = "";
screenSecondary.textContent = "";

keys.forEach((key) => {
  let randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  key.style.cssText = `background-color: ${randomColor}`;
});

keys.forEach((key) =>
  key.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(typeof e.target.textContent);
    updatePrimaryScreen(e.target.getAttribute("data-value"));
    screenSecondary.textContent = evaluate(screenPrimary.textContent);
  })
);
