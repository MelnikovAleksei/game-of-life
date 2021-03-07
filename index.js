const readline = require('readline');
const fs = require('fs');

let grid;

const minRows = 3;
const maxRows = 20;

const minCols = 3;
const maxCols = 20;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question(`
    Start the "Game of Life" with a "random" starting state or enter data from a "file"? 
    (Put the "two-dimensional" array with "1" and "0" 
    into a file called "starting-state" and extension ".txt" 
    in the root folder of the game). 
    (random/file) `, (answer) => {
    if (answer.toLowerCase().trim() === 'random') {
        grid = buildGrid();
        start();
    } else if (answer.toLowerCase().trim() === 'file') {
        fs.readFile('./starting-state.txt', 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                rl.close();
            }
            grid = JSON.parse(data);
            start();
        })
    } else {
        rl.close();
    }
});

function buildGrid() {
    const randomCols = Math.floor(Math.random() * (maxCols - minCols + 1)) + minCols;
    const randomRows = Math.floor(Math.random() * (maxRows - minRows + 1)) + minRows;

    const arr = new Array(randomCols).fill(null);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(randomRows).fill(null);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.floor(Math.random() * 2);
        };
    };
    return arr;
};

function createNextGeneration(grid) {
    
    const cols = grid.length;
    const rows = grid[0].length;

    const nextGen = grid.map((arr) => [...arr]);

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];

            let numNeighbors = 0;
            
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    };

                    const x_cell = (col + i + cols) % cols;
                    const y_cell = (row + j + rows) % rows;

                    numNeighbors += grid[x_cell][y_cell];
                };
            };

            if (cell === 1 && numNeighbors < 2) {
                nextGen[col][row] = 0;
            } else if (cell === 1 && numNeighbors > 3) {
                nextGen[col][row] = 0;
            } else if (cell === 0 && numNeighbors === 3) {
                nextGen[col][row] = 1;
            }
        };
    };
    return nextGen;
}

function render() {
    grid = createNextGeneration(grid);
    console.clear();
    console.table(grid);
};

function start() {
    console.log('Starting game');
    setInterval(render, 1000);
}
