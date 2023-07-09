const initialState = {value: 0}

function counterReducer(state = initialState, action) {
    //check to see if this reducer cares about this action
    if (action.type === 'counter/incrment') {
        //if so, make a copy
        return {
            ...state,
            //update the copy with the new value
            value: state.value + 1
        }
    }
    //otherwise return the original state
    return state
}


function lCat(cat) {
    return cat.startsWith("L")
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);



/*const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        alert(button.id)
    })
})
/*

//Anonymous functions --> not named, can be assigned to a variable
//mostly used by passing them as arguments to other functions
//as callbacks


/* const funkyFunction = function(music, isWhiteBoy) {
    if (isWhiteBoy) {
        console.log('Play: ' + music); 
    }
}

const funkyFunc = (music, isWhiteBoy) => {
    if (isWhiteBoy) {
        console.log('Play: ' + music);
    }
}
*/

/*
//Arrow functions
const playThe = (funky) => {
    return funky + " music";
  }
// one arg, () can be omitted
const playThee = funky => {
    return funky + " music"
}
// one line, {} can be  omitted
//When omitting the brackets, the arrow function returns the 
//evaluated expression without requiring the return keyword.
const playTheee = funky => funky + " music"

//no arguments
const playThat = () => "FUNKY MUSIC"
or, 
const playThat = () => { 
    return "funky music"; 
}
*/

//callback

const notes = ['do', 're', 'me']

notes.forEach((note) => console.log(note))

function myForEach(array, callback) {
    for (let i = 0; i  < array.length; i++) {
        callback(array[i])
    }
}

const myArray = [2, 3, 4, 2]
myForEach(myArray, (item) => {
    console.log(item + 2);
})



function myMap(array, callback) {
    const myNewArray = [];

    for (let i = 0; i < array.length; i++) {
        const callbackRes = callback(array[i]);
        myNewArray.push(callbackRes);
    }

    return myNewArray;
}

const addedArr = myMap([1, 2, 3], (arrayElem) => {
    return arrayElem + 2;
});

console.log(addedArr)



const elem = document.querySelector("#myId");

elem.addEventListener('click', (event) => {
    console.log(event.target.value)
})