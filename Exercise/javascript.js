function printNumbers(id) {
    let obj = document.getElementById(id);
    for (let i=1; i<=100; i++) {
        obj.innerHTML += i;

        if (i<100) obj.innerHTML += ', ';
    }
}

function changeFontSize(rangeId, txtId) {
    let range = document.getElementById(rangeId).value;
    document.getElementById(txtId).style.fontSize = range+'px';
}

let colorIndex = 0;
let colors = ["red", "green", "blue", 'purple'];
function changeColor(id) {
    document.getElementById(id).style.color = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) colorIndex = 0;
}