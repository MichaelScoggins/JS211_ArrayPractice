// 1. `.length` - Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
//    * Console.log the length of the array.
//    * Use node main.js to run the program.
let cars = ['Ford', 'Honda', 'Chevy', 'Toyota']
console.log('Initial array of "cars": ', cars)
//*****************************************************************************************************************************//
// 2. `.concat()` - Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
//    * Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
//    * Run the program.
let moreCars = ['Lamborghini', 'Lotus', 'Aston Martin', 'Honda']
let totalCars = cars.concat(moreCars)
console.log('Total Cars Array "totalCars": ', totalCars)
//*****************************************************************************************************************************//
// 3. `.indexOf() and .lastIndexOf()` - Use the indexOf method to console.log the index of Honda.
//     * Use the lastIndexOf method to console.log the index of Ford.
//    * Run the program.
console.log('Index of "Honda": ', cars.indexOf('Honda'))
console.log('Last Index of "Ford": ', cars.lastIndexOf('Ford'))
//*****************************************************************************************************************************//
// 4. `.join()` - Use the join method to covert the array totalCars into a string called stringOfCars.
//    * Run the program.
let stringOfCars = totalCars.join("****")
console.log('Joined array of totalCars: ', stringOfCars)
//*****************************************************************************************************************************//
// 5. `.split()` - Use the split method to convert stringOfCars back into an array called totalCars.
//     * Run the program.
let totalCars1 = stringOfCars.split("****")
console.log("Re-Array of totalCars: ", totalCars1)
//*****************************************************************************************************************************//
// 6. `.reverse()` - Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
//    * Run the program.
let carsInReverse = totalCars.reverse()
console.log("Reversed array of totalCars: carsInReverse: ", carsInReverse)
//*****************************************************************************************************************************//
// 7. `.sort()` - Use the sort method to put the array carsInReverse into alphabetical order.
//     * Based on the types of cars you used, predict which item in the array should be at index 0.
//     * Use the following code to confirm or reject your prediction: `alert(carsInReverse.indexOf('yourPrediction'));`
console.log("carsInReverse (now sorted): ", carsInReverse.sort())
console.log(carsInReverse.indexOf('Aston Martin'));
//*****************************************************************************************************************************//
// 8. `.slice()` - Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let  removedCars = carsInReverse.slice(2,4)
console.log("array, removedCars, which is 'Ford' and 'Honda': ", removedCars)
//*****************************************************************************************************************************//
// 9. `.splice()` - Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
console.log("carsInReverse, pre-spliced: ", carsInReverse)
// console.log("return of 'carsInReverse.splice(1, 2)'", carsInReverse.splice(1, 2, "Ford", "Honda"))
let splicedCars = carsInReverse.splice(1, 2, "Ford", "Honda")
console.log("carsInReverse spliced with 2nd and 3rd elements spliced with 'Ford' and 'Honda' in their stead (result of carsInReverse.splice())", carsInReverse)
//*****************************************************************************************************************************//
// 10. `.push()` - Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
// carsInReverse.push(splicedCars.join())
splicedCars.forEach(car => carsInReverse.push(car))
// console.log("experiment", carsInReverse)
// carsInReverse.push("Chevy", "Ford")
console.log("carsInReverse with spliced items pushed back in: ", carsInReverse)
//*****************************************************************************************************************************//
// 11. `.pop()` - Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log("popped carsInReverse: ", carsInReverse.pop())
//*****************************************************************************************************************************//
// 12. `.shift()` - Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log("shifted carsInReverse: ", carsInReverse.shift())
console.log("First item in carsInReverse: ", carsInReverse[0])
console.log("carsInReverse: ", carsInReverse)
//*****************************************************************************************************************************//
// 13. `.unshift()` - Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Mercedes-Benz")
console.log("add new item (Mercedes-Benz) using unshift: ", carsInReverse)
//*****************************************************************************************************************************//
// 14 `.forEach()` - Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
//    * `.forEach()` requires a function to be passed into it as its first argument. Build a function that will add 2 and then use `.forEach()` to pass each number into your freshly built function. `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(num => console.log(num + 2))