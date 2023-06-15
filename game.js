var player = document.getElementById('player');
var obstacle = document.getElementById('obstacle');

var playerJumping = false;
var playerBottom = 0;
var obstacleLeft = 500;

function jump() {
    if (!playerJumping) {
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
    }
});

function updateGameArea() {
    obstacleLeft -= 2;
    obstacle.style.right = obstacleLeft + 'px';

    if (obstacleLeft < 0) {
        obstacleLeft = 500;
    }

    if (obstacleLeft > 450 && obstacleLeft < 500 && playerBottom === 0) {
        alert('Game Over');
    }
}

setInterval(updateGameArea, 20);
