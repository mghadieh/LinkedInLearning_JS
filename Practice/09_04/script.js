/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const cell01 = document.querySelector(".cell01");
const gridC = document.querySelector(".grid");
const container = document.querySelector(".container");

cell01.addEventListener("mouseover", () => {
  cell01.classList.add("blue");
});

cell01.addEventListener("mouseout", () => {
  cell01.classList.remove("blue");
});

gridC.addEventListener("mouseenter", () => {
  gridC.style.border = "3px solid red";
});

gridC.addEventListener("mouseleave", () => {
  gridC.style.border = "";
});

container.addEventListener("mousedown", () => {
  alert("Hello! You pressed a box!");
});

document.addEventListener("mousedown", () => {
  alert("You pressed the window!");
});
