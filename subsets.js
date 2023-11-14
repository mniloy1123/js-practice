const subsets = function(nums) {
    let result = [];
    result.push([]);

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const n = result.length;
        for (let j = 0; j < n; j++) {
            const set= [...result[j]]
            set.push(currentNumber);
            result.push(set);
        }
    }
    return result;
}

console.log(subsets([1, 2, 4]));