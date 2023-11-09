class Solution {
    countIslands(array) {
        const rows = array.length;
        const columns = array[0].length;
        let totalIslands = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (array[i][j] === 1) {
                    totalIslands++;
                    this.dfs(array, i, j);
                }
            }
        }
        return totalIslands;
    }

    dfs(array, x, y) {
        //not a valid cell
        if (x < 0 || x >= array.length || y < 0 || y >= array[0].length) {
            return;
        }
        if (array[x][y] === 0) {
            return;
        }
        //mark as visited
        array[x][y] = 0;

        this.dfs(array, x + 1, y);
        this.dfs(array, x - 1, y);
        this.dfs(array, x, y + 1);
        this.dfs(array, x, y - 1);
    }
}

let sol = new Solution();
console.log(sol.countIslands([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
]))