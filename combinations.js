var combine = function(n, k) {
    const result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        //try out the next steps
        for (let i = start; i <= n; i++) {
            path.push(i); //make a move
            backtrack(i + 1, path) //continue
            path.pop() //backtrack
        }
    }
    //start from 1
    backtrack(1, []);
    return result;
};
