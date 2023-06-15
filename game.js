var character = document.getElementById('character');
var obstacle = document.getElementById('obstacle');
var scoreElement = document.getElementById('score');
var gameOverText = document.getElementById('gameOverText');
var restartButton = document.getElementById('restartButton');

var gameInterval;
var score = 0;

function startGame() {
    gameInterval = setInterval(gameLoop, 20);
}

function gameLoop() {
    var characterRect = character.getBoundingClientRect();
    var obstacleRect = obstacle.getBoundingClientRect();

    // Move character up if mouse is down, otherwise move character down
    if (mouseIsDown) {
        character.style.bottom = (characterRect.bottom + 1) + 'px';
    } else {
        character.style.bottom = (characterRect.bottom - 1) + 'px';
    }

    // Move obstacle to the left
    obstacle.style.right = (obstacleRect.right + 1) + 'px';

    // Check for collision between character and obstacle
    if (characterRect.right > obstacleRect.left && characterRect.left < obstacleRect.right &&
        characterRect.bottom > obstacleRect.top && characterRect.top < obstacleRect.bottom) {
        endGame();
    }

    // Increase score
    score++;
    scoreElement.innerText = 'Score: ' + score;
}

function endGame() {
    clearInterval(gameInterval);
    gameOverText.style.display = 'block';
    restartButton.style.display = 'block';
}

function restartGame() {
    character.style.bottom = '50px';
    obstacle.style.right = '0px';
    score = 0;
    scoreElement.innerText = 'Score: ' + score;
    gameOverText.style.display = 'none';
    restartButton.style.display = 'none';
    startGame();
}

var mouseIsDown = false;

document.body.onmousedown = function() {
  mouseIsDown = true;
};

document.body.onmouseup = function() {
  mouseIsDown = false;
};

restartButton.onclick = restartGame;

