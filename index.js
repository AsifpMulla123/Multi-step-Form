// Progress bar buttons
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');

const basic = document.getElementById('basic-info');
const next = document.getElementById('next');
const contact = document.getElementById('contact-info');
const prev1 = document.getElementById('prev1');
const next1 = document.getElementById('next1');
const birthDate = document.getElementById('birth-date-info');
const prev2 = document.getElementById('prev2');
const next2 = document.getElementById('next2');
const login = document.getElementById('Login-info');
const prev3 = document.getElementById('prev3');
const submit = document.getElementById('submit');

// Next Buttons
next.addEventListener("click", () => {
    basic.style.marginLeft = "-21rem";
    one.style.backgroundColor = "lightcoral";
    one.style.color = "#fff";
});
next1.addEventListener("click", () => {
    contact.style.marginLeft = "-20.5rem";
    two.style.backgroundColor = "lightcoral";
    two.style.color = "#fff";
});
next2.addEventListener("click", () => {
    birthDate.style.marginLeft = "-20.5rem";
    three.style.backgroundColor = "lightcoral";
    three.style.color = "#fff";
});
// Previous Buttons
prev1.addEventListener("click", () => {
    basic.style.marginLeft = "-0.5rem";
    one.style.backgroundColor = "#fff";
    one.style.color = "#000";
});
prev2.addEventListener("click", () => {
    contact.style.marginLeft = "0rem";
    two.style.backgroundColor = "#fff";
    two.style.color = "#000";
});
prev3.addEventListener("click", () => {
    birthDate.style.marginLeft = "0rem";
    three.style.backgroundColor = "#fff";
    three.style.color = "#000";
});
// submit Buttons
submit.addEventListener("click", () => {
    four.style.backgroundColor = "lightcoral";
    four.style.color = "#fff";
    alert("Sign Up Successfully.");
    location.reload();
});