// Modal functionality
var modal = document.getElementById('termsModal');
var btn = document.getElementById('terms');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Registration form validation
function validateRegistration(event) {
    event.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var terms = document.getElementById('terms').checked;

    // Validation logic goes here
}

// Login form validation
function validateLogin(event) {
    event.preventDefault();
    var usernameOrEmail = document.getElementById('usernameOrEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Validation logic goes here
}
