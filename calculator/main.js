// ÷ ×
// "अरे करना क्या चाहते हो?"
// "अधिकतम अंक सीमा 15 है"
// "उत्तर 15 अंकों से बड़ा है"
// "शून्य से भाग नहीं किया जा सकता"
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
    else if (str.charAt(i) == " ") break;
    i--;
    ans++;
  }
  return ans;
}

//
function keyBoardTOValue(key) {
  if (key >= "0" && key <= "9") return key;
  else if (key == "Delete" || key == "Backspace") return "delete";
  else if (key == "/") return "divide";
  else if (key == "*") return "multiply";
  else if (key == "-") return "subtract";
  else if (key == "+") return "add";
  else if (key == "%") return "percent";
  else if (key == ".") return "dot";
  else if (key == "=" || key == "Enter") return "equal";
  return null;
}

function doNothing() {
  let str = screenPrimary.textContent;
  screenPrimary.textContent = "अरे करना क्या चाहते हो ?";
  let delayInMilliseconds = 1000; //1 second
  setTimeout(function () {
    screenPrimary.textContent = str;
  }, delayInMilliseconds);
}

// don't allow scientific notation
function BigAnswerError() {
  let str = screenPrimary.textContent;
  screenPrimary.textContent = "उत्तर 15 अंकों से बड़ा है";
  let delayInMilliseconds = 1000; //1 second
  setTimeout(function () {
    screenPrimary.textContent = str;
  }, delayInMilliseconds);
}

function updatePrimaryScreen(value) {
  // console.log(value);

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
  else if (value >= "0" && value <= "9") {
    if (screenPrimary.textContent.slice(-1) == ")") doNothing();
    else if (numberLen(screenPrimary.textContent) < 15)
      screenPrimary.textContent += value;
    else {
      let str = screenPrimary.textContent;
      screenPrimary.textContent = "अधिकतम अंक सीमा 15 है";
      let delayInMilliseconds = 1000; //1 second
      setTimeout(function () {
        screenPrimary.textContent = str;
      }, delayInMilliseconds);
    }
  }

  // add dot to the screen
  else if (value == "dot") {
    // Add inital 0 if previous entity was a operator or empty string
    if (screenPrimary.textContent.slice(-1) == ")") doNothing();
    else if (
      screenPrimary.textContent.slice(-1) == "" ||
      screenPrimary.textContent.slice(-1) == " "
    ) {
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
      doNothing();
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
        doNothing();
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
      else {
        doNothing();
      }
    }
    // if previous entitity is a operator replace it with new operator
    else if (screenPrimary.textContent.slice(-1) == " ")
      screenPrimary.textContent = screenPrimary.textContent.replaceAt(-2, op);
    // otherwise add the operator itself
    else screenPrimary.textContent += ` ${op} `;
  } else {
    doNothing();
  }
}

function evaluate(expr) {
  if (screenPrimary.textContent == "") return "";
  if (expr.slice(-1) == " ") return "";
  expr = expr.replaceAll("×", "*");
  expr = expr.replaceAll("÷", "/");
  let ans = eval(expr);
  if (ans == Infinity || ans == -Infinity) {
    let str = screenPrimary.textContent;
    screenPrimary.textContent = "शून्य से भाग नहीं किया जा सकता";
    let delayInMilliseconds = 1000; //1 second
    setTimeout(function () {
      screenPrimary.textContent = str;
    }, delayInMilliseconds);
  }
  if (eval(expr).toString().includes("e")) {
    BigAnswerError();
  }
  return eval(expr);
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

//
document.addEventListener("keydown", (event) => {
  // console.log(event.key);
  // console.log(keyBoardTOValue(event.key));
  let value = keyBoardTOValue(event.key);
  if (value) {
    updatePrimaryScreen(value);
    screenSecondary.textContent = evaluate(screenPrimary.textContent);
  }
});
