/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

// function valuesInObject(obj) {
//   let arrayofValues = []
//   for (let values in obj) {
//     arrayofValues.push(obj[values])
//   }
//   return arrayofValues
// }

function valuesInObject(obj) {
  return Object.values(obj)
}

let animals = { dog: "Wolfie", cat: "Jet", bison: "Bilbo" }
let foods = { apple: "tart", lemon: "sour", mango: "sweet" }
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;