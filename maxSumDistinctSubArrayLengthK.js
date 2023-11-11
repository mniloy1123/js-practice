var maximumSubarraySum = function(nums, k) {
    let windowStart = 0, maxSum = 0, windowSum = 0;
    let frequencyMap = {};

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const endElement = nums[windowEnd];
        if (frequencyMap[endElement]) {
            frequencyMap[endElement] += 1;
        } else {
            frequencyMap[endElement] = 1;
        }
        windowSum += endElement;

        while (windowEnd - windowStart + 1 > k || frequencyMap[endElement] > 1) {
            const startElement = nums[windowStart];
            windowSum -= startElement;
            frequencyMap[startElement]--;

            if (frequencyMap[startElement] === 0) delete frequencyMap[startElement];
            windowStart++;
        }

        if (windowEnd - windowStart + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
        }
    }
    return maxSum;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))

// nums = [1, 5, 4, 2, 9, 9],  k = 3

// first iteration:
// - currElement = 1
// - frequencyMap: {1: 1}
// - windowSum: 1
// - window - windowStart + 1 is 1 < k ==> no shrinking yet

// Second Iteration (windowEnd = 1):

//     endElement = 5.
//     Update freqMap: {1: 1, 5: 1}.
//     Update windowSum: 6.
//     Still, windowEnd - windowStart + 1 is 2 (< k), so no shrinkage.

// Third Iteration (windowEnd = 2):

//     endElement = 4.
//     Update freqMap: {1: 1, 5: 1, 4: 1}.
//     Update windowSum: 10.
//     Now, windowEnd - windowStart + 1 is 3 (=k), so update maxSum: 10.

//     Fourth Iteration (windowEnd = 3):

//     endElement = 2.
//     Update freqMap: {1: 1, 5: 1, 4: 1, 2: 1}.
//     Update windowSum: 12.
//     Need to shrink as windowEnd - windowStart + 1 is 4.
//     Remove 1 from windowStart: Update freqMap: {5: 1, 4: 1, 2: 1} and windowSum: 11.
//     Now, windowEnd - windowStart + 1 is 3, update maxSum: 11

//     Fifth Iteration (windowEnd = 4):

//     endElement = 9.
//     Update freqMap: {5: 1, 4: 1, 2: 1, 9: 1}.
//     Update windowSum: 20.
//     Need to shrink as windowEnd - windowStart + 1 is 4.
//     Remove 5 from windowStart: Update freqMap: {4: 1, 2: 1, 9: 1} and windowSum: 15.
//     Now, windowEnd - windowStart + 1 is 3, update maxSum: 15.

//     Further Iterations:

//     For the next iterations with windowEnd = 5 and 6,
//     each containing 9, the frequency of 9 increases,
//     causing the window to shrink immediately
//     and not allowing the window sum to exceed 15.

//     Final Result:

//     The function returns maxSum = 15,
//     which is the maximum sum of a distinct
//     subarray of size k.