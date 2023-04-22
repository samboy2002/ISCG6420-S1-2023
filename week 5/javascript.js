let count = 0;
let banners = ['banner1.jpg', 'banner2.jpg'];

// let loopBanner = setInterval(function() {
//     document.getElementById('loopBanner').src = banners[count%2];
//     count++;
//     if (count > 10) {
//         clearInterval(loopBanner);
//         document.getElementById('loopBanner').style.opacity = 0.5;
//     }
// }, 3000);

function createBookItem(firstName, lastName, emailAddress) {
    let item = {};
    item.firstName = firstName;
    item.lastName = lastName;
    item.emailAddress = emailAddress;

    item.write = function () {
        let html = '<tr>';
        html += '<td>' + this.firstName + '</td>'
        html += '<td>' + this.lastName + '</td>'
        html += '<td>' + this.emailAddress + '</td>'
        html += '</tr>'

        document.write(html);
    }

    return item;
}

function inputBookItem() {
    var fname=prompt("Please enter your first name:","Your first name");
    var lname=prompt("Please enter your last name:","Your last name");
    var email=prompt("Please enter your email:","Your email");

    let table = document.getElementsByTagName('table')[0];

    let newRow = table.insertRow();
    
    let cell1 = newRow.insertCell();
    cell1.innerHTML = fname;
    cell1.style.color = 'green';

    let cell2 = newRow.insertCell();
    cell2.innerHTML = lname;
    cell2.style.color = 'green';

    let cell3 = newRow.insertCell();
    cell3.innerHTML = email;
    cell3.style.color = 'green';
}