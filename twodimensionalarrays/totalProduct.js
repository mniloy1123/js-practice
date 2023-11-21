function totalProduct(array) {
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            product *= array[i][j]
        }
    }
    return product;
}
let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1));