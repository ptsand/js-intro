/*
1) Implement and test the Closure Counter Example from the Slides
*/
let makeCounter = function() {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };
  let counter1 = makeCounter();
  let counter2 = makeCounter();
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()) // return 2
/*
  2) Implement a reusable function using the Module pattern that should encapsulate information about a person
  (name, age) and return an object with the following methods:
  setAge, setName, getInfo (should return a string like Peter, 45)
*/
const makePerson = () => {
    let name;
    let age;
    function setName(value) {
        name = value
    }
    function setAge(value) {
        // validate 
        if (typeof value === "number" && value >= 0) age = value
    }
    return {
        setName: name=>setName(name),
        setAge: age=>setAge(age),
        getInfo: ()=>"name: "+name+", age: "+age
    }
}
const person = makePerson()
person.setName('Test Name')
person.setAge(111)
console.log(person.getInfo())