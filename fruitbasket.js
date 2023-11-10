var totalFruit = function(fruits) {
    let start = 0, maxLength = 0, fruitFrequency = {};

    for (let i = 0; i < fruits.length; i++) {
        const rightFruit = fruits[i];
        if (!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;
        //shrink the window till 2 fruits are left in the dict
        while (Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[start];
            fruitFrequency[leftFruit] -= 1;
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit];
            }
            start += 1;
        }
        maxLength = Math.max(maxLength, i - start + 1)

    }
    return maxLength;
}
