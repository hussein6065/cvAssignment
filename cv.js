
const first= localStorage.getItem("first");
const mid = localStorage.getItem("mid");
const last = localStorage.getItem("last");

const email = localStorage.getItem("email");
const gender = localStorage.getItem("gender");
const number = localStorage.getItem("number");
const address = localStorage.getItem("address");


var name = '';
if (mid.length == 0)
    name = `${first} ${last}`;
else
    name = `${first} ${mid} ${last}`;

document.title = `${first}'s CV`
document.getElementById("name").innerHTML = name;
document.getElementById("address").innerHTML = address;
document.getElementById("phone").innerHTML = number;
document.getElementById("email").innerHTML = email;


    













