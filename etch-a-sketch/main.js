const DEFAULT_COLOR = "#6666FF";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 25;
const DEFAULT_BORDER = true;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let currentBorder = DEFAULT_BORDER;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setBorderMode(classList) {
  if (classList.contains('active'))
    currentBorder = false;
  else
    currentBorder = true;
  let gridElements = document.querySelectorAll('.grid-element');
  if(currentBorder)
    gridElements.forEach(element => {
      element.classList.add('border');
    });
  else
  gridElements.forEach(element => {
    element.classList.remove('border');
  });
  activateButton(currentMode);
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

let colorPicker = document.getElementById("colorPicker");
let borderBtn = document.getElementById("borderBtn");
let colorBtn = document.getElementById("colorBtn");
let rainbowBtn = document.getElementById("rainbowBtn");
let eraserBtn = document.getElementById("eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let sizeValue = document.getElementById("sizeValue");
let sizeSlider = document.getElementById("sizeSlider");
let grid = document.getElementById("grid");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
borderBtn.onclick = (e) => setBorderMode(e.target.classList);
colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");
eraserBtn.onclick = () => setCurrentMode("eraser");
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
  clearGrid();
  setupGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = "";
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    if (currentBorder) gridElement.classList.add("border");
    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);
    grid.appendChild(gridElement);
  }
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "#fefefe";
  }
}

function activateButton(newMode) {
  if (currentMode === "rainbow") {
    rainbowBtn.classList.remove("active");
  } else if (currentMode === "color") {
    colorBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }

  if (newMode === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newMode === "color") {
    colorBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }

  if (currentBorder) borderBtn.classList.add("active");
  else borderBtn.classList.remove("active");
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
};
