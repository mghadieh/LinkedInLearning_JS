/*
Practice exercise requirements:
1 - Find an element and add two classes to it
2 - Remove one of the newly added classes
3 - Add a new attribute to an element
4 - Request the value of the attribute
5 - Change the value of the attribute
6 - Add some inlince CSS to an element by specifying the Style property and setting its value
7 - Query the style property of the element in the console to get a list of all the style properties available
*/

/* 1 */
let att1 = document.querySelector("li").classList;
console.log(att1);

att1.add("new-class");
att1.add("another-class");

/* 2 */
att1.remove("new-class");

/*3 */
let att2 = document.querySelector("li");
att2.setAttribute("data-title", "False Title")

console.log(att2)

/* 4 */
document.querySelector("li").getAttribute("data-title");
console.log("Title is " + document.querySelector("li").getAttribute("data-title"))

/* 5 */
document.querySelector("li").setAttribute("data-title", "Title changed");
console.log("New title is: " + document.querySelector("li").getAttribute("data-title"))

/* 6 */
console.log(document.querySelector(".leftlength").style);
document.querySelector(".leftlength").style.backgroundColor = "yellow";

/* 7 */
// write the following in the console
// document.querySelector(".leftlength").style