const cells = document.querySelectorAll('[data-cell]');

const board = document.querySelector('.board');

let currentPlayer = 'X';


const winningCombinations = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6]

];


cells.forEach(cell => {

    cell.addEventListener('click', handleClick, { once: true });

});


function handleClick(e) {

    const cell = e.target;

    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {

        alert(`${currentPlayer} wins!`);

        resetGame();

    } else if (isDraw()) {

        alert("It's a draw!");

        resetGame();

    } else {

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    }

}


function checkWin(player) {

    return winningCombinations.some(combination => {

        return combination.every(index => {

            return cells[index].textContent === player;

        });

    });

}


function isDraw() {

    return [...cells].every(cell => {

        return cell.textContent;

    });

}


function resetGame() {

    cells.forEach(cell => {

        cell.textContent = '';

        cell.removeEventListener('click', handleClick);

        cell.addEventListener('click', handleClick, { once: true });

    });

    currentPlayer = 'X';

}