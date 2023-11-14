var minRemoveToMakeValid = function(s) {
    /*
    - stack
    - invalidIndices (set)
    - Iterate through the string
        - if "(", push it to the stack
        - if ")",
            if  the stack is empty (invalid) --> add it to invalidIndices.
            if not, pop from the stack (should be a open paren)
    - anything left in the stack
        - add it to the stack (must be invalid open parens)
    - build the valid string (iterate through the string again)
        - if the index is not in the invalidIndices
            - add it to the result string
    - return result

    */
    let stack = [];
    let invalidIndices = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                invalidIndices.add(i);
            } else {
                stack.pop();
            }
        }
    }
    while (stack.length) {
        invalidIndices.add(stack.pop());
    }

    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (!invalidIndices.has(i)) {
            result += s[i]
        }
    }

    return result;
};