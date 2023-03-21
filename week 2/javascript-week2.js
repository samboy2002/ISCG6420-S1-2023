function changeTextColor() {
    var text = document.getElementById('txtExample1');

    text.style.color = 'red';
    text.style.fontSize = '25px';
}

function changeColorPicker() {
    var color = document.getElementById('txtExample2').value;

    document.getElementById('displayExample2').style.backgroundColor = color;
}

function changeFontSize() {
    var size = document.getElementById('changeFontSize').value;
    console.log('size=' + size);

    document.getElementById('txtExample3').style.fontSize = size+'px';
}

function changeFontFamily() {
    var fontFamily = document.getElementById('changeFontFamily').value;

    document.getElementById('example4').style.fontFamily = fontFamily;
}

function doTask1() {
    var width = document.getElementById('rangeWidth').value;
    var height = document.getElementById('rangeHeight').value;

    var background = document.getElementById('colorBackground').value;
    var front = document.getElementById('colorFront').value;

    var text = document.getElementById('divTask1');

    text.style.width = width + 'px';
    text.style.height = height + 'px';
    text.style.backgroundColor = background;
    text.style.color = front;
}

function doTask2() {
    var size = document.getElementById('t2_fontSize').value;
    var color = document.getElementById('t2_color').value;
    var font = document.getElementById('t2_fontFamily').value;
    var weight = document.getElementById('t2_fontWeight').value;

    var textStyle = document.getElementById('divTask2').style;

    textStyle.fontSize = size+'px';
    textStyle.color = color;
    textStyle.fontFamily = font;
    textStyle.fontWeight = weight;
}