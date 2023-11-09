class Solution {
    removeDuplicates(s, k) {

        let stack = [];

        for (let char of s) {
            //accesses the char at the top of stack
            if (stack.length > 0 && stack[stack.length - 1][0] === char) {
                //update the second element (counter) of the top char
                stack[stack.length -1][1]++;
            } else {
                stack.push([char, 1]);
            }
            //if the top elem of the stack's counter reaches k
            if (stack[stack.length - 1][1] === k ) {
                stack.pop();
            }
        }

        //reconstruct the string from what's left on the stack
        let result = '';
        for (let [char, count] of stack) {
            result+= char.repeat(count);
        }

        return result;
    }

}