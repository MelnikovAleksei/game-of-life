# Conway's Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.

## Rules

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Instruction

You can play the "Game of Life" with a "random" starting state or enter data from a "file".

Put the "two-dimensional" array with "1" and "0" into a file called "starting-state" and extension ".txt" in the root folder of the game ("starting-state.txt"):

```javascript
[
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0], 
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]
```

## Installation

```bash
git clone https://github.com/MelnikovAleksei/game-of-life.git

cd game-of-life

node index.js
```
