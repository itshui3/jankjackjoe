
import Header from './Header/Header.js'

export {
    Header
}

/*
Header -
TicTacToe

Game State Info

start game - button
clicking on this will give the turn to a player thus enabling them to select a tile to place their piece

P1 - text
indicates it is player 1's turn, clicks on empty tiles will generate their piece and give the turn to player 2

P2 - text
indicates it is player 2's turn ,clicks on empty tiles will generate their piece and give the turn to player 1

GameOver[Click anywhere to restart] - text
if there are 3 of the same pieces in a row, the game will end and render text stating which player won
I will try to do this functionally, giving GameOver text an interpolation property such that 3-piece validator can pass winner-text to gameOver's state to be interpolated in. 
In this method, we minimize the amount of state needing to be tracked and compose our logic functionally

*/