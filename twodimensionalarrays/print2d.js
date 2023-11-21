function print2D(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

let array1 = [
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
  ];
print2D(array1);
let array2 = [[9, 3, 4], [11], [42, 100]];
print2D(array2);