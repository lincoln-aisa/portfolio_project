const words = ["stout", "grape", "train", "sorry", "melon", "drain", "order", "plans"];
const answer = words[Math.floor(Math.random() * words.length)];
const maxAttempts = 6;
let attempts = 0;
const grid = document.getElementById('grid');

function createGrid() {
    for (let i = 0; i < maxAttempts; i++) {
        const row = document.createElement('div');
        row.className = 'grid';
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${i}-${j}`;
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }
    if (attempts >= maxAttempts) {
        alert("No more attempts left!");
        return;
    }

    for (let i = 0; i < 5; i++) {
        const cell = document.getElementById(`cell-${attempts}-${i}`);
        cell.textContent = guess[i];

        if (guess[i] === answer[i]) {
            cell.classList.add('correct');
        } else if (answer.includes(guess[i])) {
            cell.classList.add('present');
        } else {
            cell.classList.add('absent');
        }
    }

    attempts++;
    guessInput.value = '';

    if (guess === answer) {
        document.getElementById('message').textContent = "Congratulations, you guessed the word!";
        guessInput.disabled = true;
    } else if (attempts === maxAttempts) {
        document.getElementById('message').textContent = `Better luck next time! The word was "${answer}".`;
        guessInput.disabled = true;
    }
}

createGrid();