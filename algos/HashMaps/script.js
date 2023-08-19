/*  
    * Function is expected to return an INTEGER.
    * returns: the minimum number of operations needed 
    * to make the string's first half an anagram of its second
    * half 
*/
function getAnagram(s) { // string s: a string of digits
    /*
    1. break s into 2 halves
        s = 12345 -- 12222 
        
        * [ we use hashmaps because of constant lookup time]

    2. get the freq of numbers for each halves
        { 
            1: 1
            2: 1
            3: 1
            4: 1
            5: 1
        }

        {
            1: 1
            2: 4
        }
    3. calculate the difference from the hashmap
        totalDiff = 3 + 1 + 1 + 1 = 6

        or, calculate total common
        totalCommon = 1 + 1 = 2
    4. return totalDiff / 2 
        6 / 2 = 3

        or, return length of either side - total commons
            = total change needed to make

    */
    const mid = s.length / 2;

    const leftHalf = s.slice(0, mid)
    const rightHalf = s.slice(mid)

    function getCountFromStr(str) {
        const map = {};


    }

}

/*
* Given a string that consists of left and right parens, balance 
* the parens by inserting as necessary. Determine the minimum
* number of characters that must be inserted.
*/
function getMin(s) {

    /*
        1. create a stac, create a count
        2. loop through s
            a. if s[i] is open parens
                -> push open parens onto stack
            b. else
                -> try to balance a open parens from stack
                -> else count++

        3. return count + stack.length
    */

    const stack = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack++;
        } else {
            if (stack > 0) {
                stack--
            }
        }
    }

    return count + stack;

}

function subarraySum(arr) {
    /*
    inputArr = [4, 5, 6]

    1. Create totalSum called res
    2. Loop through the input array
        a. create a variable to store sum
        b. Loop through remianing elements
            i. Add the element to sum
            ii. add the sum to res

    3. return res
    

    start at 4:   [4], [4, 5], [4, 5, 6]
    start at 5:   [5], [5, 6]

}