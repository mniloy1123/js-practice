class Solution {
    removeDuplicates(s) {
        //create a stack
        let stack = [];

        //Iterate through the string
        for (let i = 0; i < s.length; i++) {
            //if stack not empty and top of stack equals current elem
            if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
        //convert the array back into a string
        return stack.join('');
    }

}