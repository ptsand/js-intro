// 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.).
// Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.
let names=["Lars", "Jan", "Peter", "Bo", "Frederik"];
names.forEach(name => console.log(name));
// 2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
let namesUpperC = names.map(name => name.toUpperCase());
console.log(namesUpperC);
/* We will continue with this exercise tomorrow when we start manipulating the browser's DOM
3) Use map, join + just a little bit more to create a function, 
which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] 
returns a string with the HTML for the names in an <ul> as sketched below:
<ul>
  <li>Lars</li>
  <li>Peter</li>
  <li>Jan</li>
  <li>Ian</li>
<ul>
The output above was shown with newlines for readability, but this is actually what we want (why):
<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul>

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/
const reducer = (accumulator, currentValue) => accumulator + "<li>" + currentValue + "</li>";
namesListItems = names.reduce(reducer, "")
console.log("<ul>"+namesListItems+"</ul>")

// 4)  Given this JavaScript array
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
// a) Use the filter function to get arrays with only:
console.log(cars.filter(car=>car.year>1999)) // Cars newer than 1999
console.log(cars.filter(car=>car.make === 'Volvo')) // All  Volvo’s
console.log(cars.filter(car=>car.price<5000)) // All cars with a price below 5000

// Callback is the predicate in this filter function
function myFilter(array, callback) {
    let filteredArray = []
    for (let index in array) {
        if (callback(array[index])) filteredArray.push(array[index])
    }
    return filteredArray
}
console.log(myFilter(cars, car=>car.price<5000)) // All cars with a price below 5000

function myMap(array, callback) {
    let mappedArray = []
    for (let index in array) {
        mappedArray.push(callback(array[index]))
    }
    return mappedArray
}
console.log(myMap(names, name=>name.toUpperCase()));

