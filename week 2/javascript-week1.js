function helloWorld() {
    document.getElementById("lblHello").innerHTML="Hello World!";
}

function takeUserInput() {
    var name = document.getElementById("username").value;
    var age = document.getElementById('age').value;

    document.getElementById('displayUserInput').innerHTML = 'Hello ' + name + '. Your age is ' + age;
}

function selectColor() {
    var x = document.getElementById('selectColor').value;

    var display = document.getElementById('displaySelectColor');

    if (x == 'red') {
        display.innerHTML = 'This is red';
    } else {
        display.innerHTML = 'This is something eles';
    }
}

function radioColor(color) {
    var display = document.getElementById('displayRadioColor');

    display.innerHTML = 'This is a ' + color + ' colour.';
    display.style.backgroundColor = color;
}