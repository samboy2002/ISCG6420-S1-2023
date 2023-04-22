console.log("Running the exercise script...");

function greeting() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    if (hour < 10) {
        greeting = "Good morning";
    } else if (hour < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    document.getElementById('txtGreeting').innerHTML = greeting + " at " + hour + ":" + minute;
}

function displayCars() {
    let cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
    let text = '';

    for (let i=0; i<cars.length; i++) {
        text += (i+1) + '.' + cars[i];
        if (i<cars.length-1) text+=', ';
    }

    document.getElementById('txtCars').innerHTML = text;
}

function displayNumbers() {
    let text = '';
    for(let i=0; i<10; i++) {
        text += '<br/>The number is ' + i;
    }

    document.getElementById('txtNumbers').innerHTML = text;
}

window.onload = function() {
    console.log('Binding document load event.');
    document.getElementById('btnEventHello').addEventListener('click', function() {
        document.getElementById('txtEventHello').innerHTML = 'Hello World!';
    });

    document.getElementById('btnSaveNameToLocalStorage').addEventListener('click', function(){
        let name = document.getElementById('inputName').value;

        localStorage.setItem('username', name);
        document.getElementById('displayName').innerHTML = 'Save name successfully.';
    })

    document.getElementById('btnLoadNameFromLocalStorage').addEventListener('click', function() {
        let name = localStorage.getItem('username');

        document.getElementById('displayName').innerHTML = 'The name is: ' + name;
    })

    let exerciseFirstName = document.getElementById('exerciseFirstName');
    let exerciseLastName = document.getElementById('exerciseLastName');
    let exerciseEmail = document.getElementById('exerciseEmail');
    let exercisePhone = document.getElementById('exercisePhone');

    exerciseFirstName.value = localStorage.getItem('exerciseFirstName');
    exerciseLastName.value = localStorage.getItem('exerciseLastName');
    exerciseEmail.value = localStorage.getItem('exerciseEmail');
    exercisePhone.value = localStorage.getItem('exercisePhone');

    exerciseFirstName.addEventListener('change', function() {
        localStorage.setItem('exerciseFirstName', exerciseFirstName.value);
    });
    exerciseLastName.addEventListener('change', function(){
        localStorage.setItem('exerciseLastName', exerciseLastName.value)
    });
    exerciseEmail.addEventListener('change', function() {
        localStorage.setItem('exerciseEmail', exerciseEmail.value);
    });
    exercisePhone.addEventListener('change', function() {
        localStorage.setItem('exercisePhone', exercisePhone.value);
    });

    let exerciseFirstPage = document.getElementById('exerciseFirstPage');
    let exerciseSecondPage = document.getElementById('exerciseSecondPage');

    document.getElementById('btnExerciseNext').addEventListener('click', function() {
        exerciseFirstPage.style.display = 'none';
        exerciseSecondPage.style.display = 'block';
    })
    document.getElementById('btnExercisePrevious').addEventListener('click', function() {
        exerciseFirstPage.style.display = 'block';
        exerciseSecondPage.style.display = 'none';
    })
}

function nextPage() {
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
}

function previousPage() {
    document.getElementById('firstPage').style.display = 'block';
    document.getElementById('secondPage').style.display = 'none';
}

/**
 * input -> change event -> save to local storage;
 * window load event set value to input from local storage
 * 
 * two div page:
 * 1. first name & last name
 * 2. email & phone
 */