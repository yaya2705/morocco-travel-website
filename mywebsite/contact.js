// contact.js

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".send-btn").addEventListener("click", function (event) {
        event.preventDefault();
        validateForm();
    });
});

function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}

function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}

function validateForm() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var message = document.forms["contact"]["message"].value;

    document.querySelector(".alert-error").style.display = "none";

    if (name === "" || email === "" || message === "") {
        document.querySelector(".alert-error").style.display = "block";
    } else {
        document.querySelector(".alert-success").style.display = "block";
        document.forms["contact"].reset();
    }
}
