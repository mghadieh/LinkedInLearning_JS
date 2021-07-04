/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
/**
 * - create basic declaration function and function expression and do the following for each:
 *      - make a change to an element in the DOM (selectQuery, adding a class, adding and element, ...)
 *      - Call the function and check the browser to make sure it is doing what it is supposed to do
 * - create an arrow function and make it do something
 */

// creating a basic declaration function
function function1() {
  const titleBkgColor = document.querySelector("header div");
  titleBkgColor.classList.add("backgroundColor");
  titleBkgColor.style.backgroundColor = "red";
}

// creating a function expression
const function2 = function () {
  let title = document.querySelector("main h2");
  console.log(title);
  //   title.textContent = "New Backpack text";
  title.style.border = "2px solid black";
};

// creating an arrow function
(() => {
  let footerElement = document.querySelector("footer");
  footerElement.style.fontWeight = "bold";
})();

function1();
function2();
