

const determineWinner = (board) => {
    console.log('in determineWinner')
    console.log('board in determineWinner', board)

    // 8 winning configurations
    // how can I reduce that? 
    const winner = 0

    // check rows
    board.forEach((row) => {
        if (
            row[0] === row[1] &&
            row[0] === row[2]) return row[0]
    })

    // check cols
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === board[1][i] &&
            board[0][i] === board[2][i]) return board[0][i]
    }
    // check diags
    if (board[0][2] == board[1][1] &&
        board[0][2] === board[2][0]) return board[0][2]
    if (board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]) return board[0][0]

    return winner
}

export {
    determineWinner
}