/**
 * Challenge: Build and modify an array
 * 1 - Build an array with 8 items
 * 2 - Remove the last item
 * 3 - Add the last item as the first item on the array
 * 4 - Sort the items by alphabetical order
 * 5 - Use the find() method to find a specific item in the array
 * 6 - Remove the item you found using the find method from the array.
 */

// 1 - Build an array with 8 items
const deskItems = [
  "calculator",
  "laptop",
  "phone",
  "screens",
  "airpods",
  "charger",
  "pen",
  "pencil",
];

// 2 - Remove the last item
// deskItems.pop();

// 3 - Add the last item as the first item on the array
// deskItems.unshift(deskItems.pop());

// 4 - Sort the items by alphabetical order
// deskItems.sort();

// 5 - Use the find() method to find a specific item in the array
// const found = deskItems.find((item) => item === "charger");
// console.log("The found item is:", found);

// Remove the item you found using the find method from the array.

let found = "charger";
const removeItem = deskItems.indexOf(found);
deskItems.splice(removeItem, 1); // splice will start at index of charger and remove 1 item.

console.log(deskItems);
