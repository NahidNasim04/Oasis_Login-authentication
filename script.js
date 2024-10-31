// Simple storage for users
let users = {};

// Function to register a user
function register() {
    let username = document.getElementById('register-username').value;
    let password = document.getElementById('register-password').value;
    
    if (username && password) {
        if (!users[username]) {
            users[username] = password;
            document.getElementById('register-status').innerText = 'Registration successful!';
        } else {
            document.getElementById('register-status').innerText = 'User already exists!';
        }
    } else {
        document.getElementById('register-status').innerText = 'Please enter a username and password.';
    }
}

// Function to log in a user
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    
    if (username && password) {
        if (users[username] && users[username] === password) {
            document.getElementById('login-status').innerText = 'Login successful!';
            document.getElementById('auth-section').style.display = 'none';
            document.getElementById('secured-page').style.display = 'block';
        } else {
            document.getElementById('login-status').innerText = 'Invalid username or password.';
        }
    } else {
        document.getElementById('login-status').innerText = 'Please enter a username and password.';
    }
}

// Function to log out a user
function logout() {
    document.getElementById('secured-page').style.display = 'none';
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('login-status').innerText = '';
    document.getElementById('register-status').innerText = '';
}
