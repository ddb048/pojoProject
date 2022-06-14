//primitive vs referencial
//primitive is immutable
//referencial is mutable

// let myObj = {}                      //instantiating an object
// myobj['cat'] = 'count chonkula'      //adding key cat with value "count chonkula"
// myObj.otherCat = 'wax'              //adding key otherCat with value "wax"
// console.log(myObj)                  //logging object to console
// myobj['cat'] = 'wayne'

// let davObj = {}     //instantiating an object
// davObj['dog'] = "Beau"       //adding key DOG with the value "Beau"
// davObj.secondDog = "Kipper"   //adding key SECONDDOG with the value "Kipper"
// console.log(davObj)


// let series = {
//     name: "Stormlight Archives",
//     books: {
//         first: "The Way of Kings",
//         second: "Words of Radiance",
//         third: "Oathbreaker",
//         fourth: "rhythm of War",
//     },
//     author: "Brandon Sanderson",
//     numberofNovellas: 1,
//     worthReading: false,
//     quality: ['third', 'first', 'fourth', 'second']
// }

// series.quality.forEach(element => console.log(series.books[element]))
// for (let key in series) {
//     console.log("current key:", key)
//     console.log('          its value is:', series[key])
// }

// let values = Object.values(series)
// console.log(values)

// let keys = Object.keys(series)
// console.log(keys)

//useState('') >>> ["", function]
//const [myState, setMyState] = useState("")
//const stateVar = useState("")

//value = myState;
//onClick = (event : {target : {value}})=>setMyState(event.target.value)

let modInstructors = ["Jeff", "Bill", "Geoff", "Alec", "Dan", "Brad", "Tom"]
console.log(modInstructors);
[modInstructors[0], modInstructors[1]] = [modInstructors[1], modInstructors[0]];
console.log(modInstructors);
