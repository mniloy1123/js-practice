var search = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let guess;

    while (max >= min) {
        guess = Math.floor((min + max) / 2);

        if (nums[guess] === target) {
            return guess;
        } else if (nums[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return -1;
}
console.log(search([-1,0,3,5,9,12], 9))