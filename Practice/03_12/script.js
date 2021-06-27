import Desk from "./desk.js";

/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
const workDesk = new Desk(60, 60, 60, "full", 400, 400);

console.log("Work Desk:", workDesk);
console.log("Volume of water: ", workDesk.waterBottle.status);
