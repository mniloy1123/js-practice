const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
   }
}

console.log(myObject.property);
console.log(myObject["obnoxious property"])

//we automatically create another object,
//called the prototype which contains
//a constructor property by default
function Dog(name, breed, color) { //constructor function
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function() {
        return 'Woof!';
    }
}
console.log(Dog);
console.log(Dog.prototype);

const dog1 = new Dog(
    "Daisy", 
    "Labrador",
    "black"
)

const dog2 = new Dog(
    "Jack",
    "Jack Russell",
    "white"
)

console.log(dog1);