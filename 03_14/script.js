/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";
// name, volume, color, numOfPages, cover, readStatus
const manual = new Book("JS Manual -  A2Z", 3, "blue", 150, "soft", false);
const cookBook = new Book("Cook Book", 1, "red", 500, "hard", true);

// console.log("The manual object:", manual);
console.log("The cook Book object:", cookBook);

console.log("The cookBook cover value is ", cookBook.cover);
cookBook.hardCover("soft");
console.log("The cookBook cover value is ", cookBook.cover);
console.log("Is book read: ", cookBook.readStatus);
