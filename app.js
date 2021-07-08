const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
// canvas => html of Element, can access to pixel
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    //new path create
    ctx.moveTo(x, y);
    // move x, y, during not click
  } else {
    ctx.lineTo(x, y);
    // (previous x, y to now x, y) to drawing
    ctx.stroke();
    // materialization to line
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
function handleColorClick(event) {
  const bgColor = event.target.style.backgroundColor;
  ctx.strokeStyle = bgColor;
}
if (colors) {
  Array.from(colors).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}
if (range) {
  range.addEventListener("input", handleRangeChange);
}
