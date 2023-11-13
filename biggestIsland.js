var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let maxArea = 0;

    const dfs = (grid, x, y) => {
        //check if the cell is invalid
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0)
            return 0;
        //mark the cell as visited
        grid[x][y] = 0;
        //count the current cell
        let area = 1;
        //lower cell
        area += dfs(grid, x + 1, y)
        //upper cell
        area += dfs(grid, x - 1 , y)
        //right cell
        area += dfs(grid, x, y + 1)
        //left cell
        area += dfs(grid, x, y - 1)
        return area;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(grid, i, j));
            }
        }
    }
    return maxArea;
}
//expected: 6
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))