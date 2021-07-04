/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

// to output the items in the array as a string, we use the join method
// console.log(backpackContents.join()); // output: piggy,headlamp,pen
// console.log(backpackContents.join(", ")); // output: piggy, headlamp, pen
// console.log(backpackContents.join(" | ")); // output: piggy | headlamp | pen

// to add elements to the end of the array, use the push method
// backpackContents.push("pencil", 5); // ["piggy", "headlamp", "pen", "pencil", 5]

// to add items to the front of the array, use the unshift method
// backpackContents.unshift("pencil", 5); // ["pencil", 5, "piggy", "headlamp", "pen"]

// to remove the first item in the array, use the method shift
// backpackContents.shift(); // ["headlamp", "pen"]

// to remove the last item in the array, use the pop method
// backpackContents.pop(); // ["piggy", "headlamp"]

console.log(backpackContents);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
