const fruits = ["apple", "banana", "peach"];
console.log(fruits.length)
fruits[5] = "mango"
console.log(fruits);
console.log(Object.keys(fruits))
console.log(fruits.length) //expected: 6
fruits.length = 2;
console.log(Object.keys(fruits)) //['0', '1']
console.log(fruits.length) //2

//An easy way to change a mutating method into a
//non-mutating alternative is to use the spread syntax or slice()
//to create a copy first:

/*
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2);
*/

// * Create a string from an array
const arr = ["hello", "bye", "hi"]
const arrString = arr.join(", ");
console.log(arrString) //hello, bye, hi

// * Find the index of item in an array
console.log(fruits.indexOf("banana")) //1

// * Check if arr contains a cerain item: indexOf(), includes()
console.log(fruits.includes("banana")) //true
console.log(fruits.indexOf("banana") !== -1); //true


// * Append an item to an array
fruits.push("Orange");
console.log(fruits) //['apple', 'banana, 'orange]

// * Remove last item
console.log(fruits.pop()) //Orange
console.log(fruits.length) //2

// * Remove multiple items from the end
fruits.push("Strawberry", "Mango", "Cherry")
// [ 'apple', 'banana', 'Strawberry', 'Mango', 'Cherry' ]
console.log(fruits)
// remove the last 2 items from the array
// [ 'Mango', 'Cherry' ]
console.log(fruits.splice(-2))
//[ 'apple', 'banana', 'Strawberry' ]
console.log(fruits)

//* Truncate an array down to its first N items
// just the first 2 item in this case
console.log(fruits.splice(2)) //['Strawberry] got removed
console.log(fruits) //['apple', 'banana']

// * Remove the first item from an array
console.log(fruits.shift()) //apple
console.log(fruits) //['banana']

// * Remove multiple items from beginning
const array = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const start = 0;
const deleteCount = 2
const removedItems = array.splice(start, deleteCount);
console.log(array) //[ 'Cherry', 'Banana', 'Mango' ]

// * Remove a single item by index
console.log(array.splice(0, 1)); //[ 'Cherry' ]
console.log(array) //[ 'Banana', 'Mango' ]

// * Iterate over an array
for (const elem of array) {
    console.log(elem) //Bananan, Mango

}

// * Merge multiple arrays
const moreThings = ["AHAHA", "ADSJKDSJDF"];
const combinedArr = array.concat(moreThings)
// [ 'Banana', 'Mango', 'AHAHA', 'ADSJKDSJDF' ]
console.log(combinedArr)

// * Copy an array
const arrayCopy = [...array]
//[ 'Banana', 'Mango' ]
console.log(arrayCopy)