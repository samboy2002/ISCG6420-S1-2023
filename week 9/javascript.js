let canvas = document.getElementById('mainCanvas');
let context = canvas.getContext('2d');

let bird = new Image();
bird.src = './images/bird.gif';

let x, y, timer;
let defaultSpeedX = speedX = 10, defaultSpeedY = speedY=10;

bird.onload = function() {
    x = 0; //canvas.clientWidth - bird.width;
    y = canvas.clientHeight - bird.height;
    context.drawImage(bird, x, y);

    timer = setInterval(drawBird, 100);
}

function drawBird() {
    context.clearRect(x, y, bird.width, bird.height);
    // context.clearRect(0, 0, canvas.width, canvas.height);

    if (y <= defaultSpeedY && x >= canvas.width - bird.width) {
        speedX = 0;
        speedY = defaultSpeedY;
    }

    if (y >= canvas.height - bird.height && x >= canvas.width - bird.width) {
        speedX = -1 * defaultSpeedX;
        speedY = -1 * defaultSpeedY;
    }

    if (y <= defaultSpeedY && x <= defaultSpeedX) {
        speedX = 0;
        speedY = defaultSpeedY;
    }

    if (y >= canvas.height - bird.height && x <= defaultSpeedX) {
        speedX = defaultSpeedX;
        speedY = -1 * defaultSpeedY;
    }
    x += speedX;
    y += speedY;
    context.drawImage(bird, x, y);
}

document.getElementById('btnAddElement').addEventListener('click', () => {
    const parentDiv = document.getElementById('divAddElement');

    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Click Me';
    newButton.addEventListener('click', ()=>{
        const name = prompt("What is your name?");
        if (name) {
            alert(`Hello ${name}`);
        }
    });
    newDiv.appendChild(newButton);

    parentDiv.appendChild(newDiv);
});
