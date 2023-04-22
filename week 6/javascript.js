let timeHandler;

function drawRect(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(timeHandler);

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);
}

function drawLine(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(timeHandler);

    ctx.beginPath();
    ctx.moveTo(10, 70);
    ctx.lineTo(300, 150);
    ctx.lineWidth = 3;
    // ctx.stroke();
    ctx.lineTo(300, 70);
    ctx.lineWidth = 5;
    // ctx.stroke();
    ctx.lineTo(10, 70);
    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawPicture(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(timeHandler);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(50, 50, 100, 50);

    ctx.beginPath();
    ctx.arc(180, 180, 50, 0, 2*Math.PI);
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'BlueViolet';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 50, 30, 0, Math.PI, true);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'green';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI, false);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 75, 20, 0.5 * Math.PI, 1.5*Math.PI, false);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 75, 20, 0.5 * Math.PI, 1.5*Math.PI, true);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function drawPicture2(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(timeHandler);

    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(800, 400);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'green';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(800, 500);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'green';
    ctx.stroke();

    for(let i=50; i < 700; i+=150) {
        ctx.beginPath();
        ctx.moveTo(i, 500);
        ctx.lineTo(i+100, 400);
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'green';
        ctx.closePath();
        ctx.stroke();
    }

    for(let i=70; i<700; i+=250) {
        ctx.beginPath();
        ctx.rect(i, 250, 200, 100);
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(270, 300);
    ctx.lineTo(320, 300);
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(520, 300);
    ctx.lineTo(570, 300);
    ctx.lineWidth = 3;
    ctx.stroke();

    for(let i=170; i<700; i+=250) {
        ctx.beginPath();
        ctx.arc(i, 350, 40, 0, 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.rect(145, 200, 50, 50);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(195, 200, 75, 50);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(170, 150, 50, 50);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(220, 115, 25, 0, 2 * Math.PI);
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(250, 75, 15, 0, 2 * Math.PI);
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(270, 45, 10, 0, 2 * Math.PI);
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();

    let positionX = 200;
    let positionY = 115;
    let r = 25;

    ctx.beginPath();
    ctx.arc(positionX, positionY, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.stroke();

    timeHandler = setInterval(function() {
        ctx.beginPath();
        ctx.arc(positionX, positionY, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white';
        ctx.stroke();

        positionY -= r;
        r -= 5;

        if (r <= 0) {
            r = 25;
            positionY = 115;
        }

        ctx.beginPath();
        ctx.arc(positionX, positionY, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }, 500);
}

function drawWithGradient(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(timeHandler);

    let gradient1 = ctx.createLinearGradient(0, 0, 200, 200);
    gradient1.addColorStop(0, 'yellow');
    gradient1.addColorStop(0.25, 'green');
    gradient1.addColorStop(0.5, 'black');
    gradient1.addColorStop(0.75, 'blue');
    gradient1.addColorStop(1, 'gray');
    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, 200, 200);

    let gradient2 = ctx.createLinearGradient(400, 400, 200, 200);
    gradient2.addColorStop(0, 'yellow');
    gradient2.addColorStop(0.25, 'green');
    gradient2.addColorStop(0.5, 'black');
    gradient2.addColorStop(0.75, 'blue');
    gradient2.addColorStop(1, 'gray');
    ctx.fillStyle = gradient2;
    ctx.fillRect(200, 200, 200, 200);
}