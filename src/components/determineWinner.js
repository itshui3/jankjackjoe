

const determineWinner = (grid) => {
    /*
    [
        [0, 0, 0]
        [0, 0, 0]
        [0, 0, 0]
    ]
    */

    // check rows
    for (let y = 0; y < grid.length; y++) {
        if (grid[y][0] === grid[y][1] &&
        grid[y][1] === grid[y][2]) return grid[y][0]
    }

    // check cols
    for (let x = 0; x < grid.length; x++) {
        if (grid[0][x] === grid[1][x] &&
        grid[1][x] === grid[2][x]) return grid[0][x]
    }

    // diagonals
    // left to right
    if (grid[0][0] === grid[1][1] &&
        grid[1][1] === grid[2][2]) return grid[0][0]

    // right to left
    if (grid[0][2] === grid[1][1] &&
        grid[2][0] === grid[1][1]) return grid[0][2]
    
    // default: no winner
    return 0
}

export { determineWinner }