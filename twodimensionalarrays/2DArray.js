let array = [
    ['a', 'b'],
    ['c', 'd', 'e'],
    ['f', 'g', 'h']
]
console.log(array);
console.log(array[0]);

let subarray = array[1];
// * same thing below
console.log(subarray[2]); //'e'
console.log(array[1][2]); //'e'


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    /*
    [ 'a', 'b' ]
    [ 'c', 'd', 'e' ]
    [ 'f', 'g', 'h' ]
    */
}

//Iterate over the 2D array and print individual elems
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j])
        /*
            a
            b
            c
            d
            e
            f
            g
            h
        */
    }
}

// * maybe a more readable alternative of the above loop
for (let i = 0; i < array.length; i++) {
    let subarray = array[i];

    for (let j = 0; j < subarray.length; j++) {
        // console.log(subarray[j])
    }
}