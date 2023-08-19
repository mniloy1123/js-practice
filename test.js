const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        //do stuff
    }
}

console.log(myObject.property);
console.log(myObject["obnoxious property"]);


const playerOne = {
    name: "tim",
    marker: "x"
}

const playertwo = {
    name: "jenn",
    marker: "O"
}

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`)
}


// * Object constructors
// When you have a specific type of object that you need 
// to duplicate like our player or inventory items, a better way 
// to create them is using an object constructor, 

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
}

Object.getPrototypeOf(Player.prototype) //returns Object.prototype

//setting Player object inherit from Person object
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype)  //returns Person.prototype

// * use the constructor by calling the function with the new keyword
const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

// console.log(player1);

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();


function Book(title, author, pages, status) {
    this.title = title, 
    this.author = author,
    this.pages = pages,
    this.status = status,
    this.info = function() {
        const bookInfo = `${title} by ${author}, ${pages} pages, ${status}`;
        return bookInfo;
    }
}

// * every object in JS has a prototype (another object that the original object inherits from)
    // * the original object (player1, player2) inherits from, and has access to all of its prototype’s 
    // * methods and properties


