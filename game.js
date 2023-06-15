var player = document.getElementById('player');
var obstacle = document.getElementById('obstacle');

var playerJumping = false;
var playerBottom = 0;
var obstacleLeft = 500;
var gameActive = false;

function jump() {
    if (!playerJumping && gameActive) {
        playerJumping = true;
        playerBottom = 50;
        player.style.bottom = playerBottom + 'px';
        setTimeout(function() {
            playerJumping = false;
            playerBottom = 0;
            player.style.bottom = playerBottom + 'px';
        }, 500);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'ArrowUp') {
        jump();
    } else if (event.key === 's') {
        startGame();
    } else if (event.key === 'r') {
        resetGame();
    }
});

function startGame() {
    gameActive = true;
}

function resetGame() {
    gameActive = false;
    playerBottom = 0;
    player.style.bottom = playerBottom + 'px';
    obstacleLeft = 500;
    obstacle.style.right = obstacleLeft + 'px';
}

function updateGameArea() {
    if (gameActive) {
        obstacleLeft -= 2;
        obstacle.style.right = obstacleLeft + 'px';

        if (obstacleLeft < 0) {
            obstacleLeft = 500;
        }

        if (obstacleLeft > 450 && obstacleLeft < 500 && playerBottom === 0) {
            gameActive = false;
            alert('Game Over');
        }
    }
}

setInterval(updateGameArea, 20);

