let colbeamMan = document.getElementById('colbeamMan');
let lightningBolt = document.getElementById('lightningBolt');
let jumpButton = document.getElementById('jumpButton');
let gameOverText = document.getElementById('gameOverText');

let isJumping = false;

jumpButton.addEventListener('click', function() {
    if (!isJumping) {
        isJumping = true;
        colbeamMan.style.bottom = '200px';

        setTimeout(function() {
            colbeamMan.style.bottom = '50px';
            isJumping = false;
        }, 1000);
    }
});

setInterval(function() {
    let colbeamManRect = colbeamMan.getBoundingClientRect();
    let lightningBoltRect = lightningBolt.getBoundingClientRect();

    if (lightningBoltRect.left < colbeamManRect.right &&
        lightningBoltRect.right > colbeamManRect.left &&
        lightningBoltRect.bottom > colbeamManRect.top &&
        lightningBoltRect.top < colbeamManRect.bottom) {
        gameOverText.style.display = 'block';
    }

    lightningBolt.style.right = parseInt(lightningBolt.style.right) + 5 + 'px';

    if (parseInt(lightningBolt.style.right) > window.innerWidth) {
        lightningBolt.style.right = '0px';
    }
}, 20);
