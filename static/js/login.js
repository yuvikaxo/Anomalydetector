// Ensure this only applies to login.html
console.log("login.js has been loaded!");

if (window.location.pathname === '/') {
    // Prevent the user from going back
    window.history.pushState(null, null, window.location.href);
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        // Push another state to block the back navigation
        window.history.pushState(null, null, window.location.href);
    };

    // Disable forward navigation
    window.addEventListener('load', function () {
        history.pushState(null, null, location.href);
        history.forward();
    });

    // Optional: Add a confirmation message when the user tries to close or refresh
    window.onbeforeunload = function() {
        return 'Are you sure you want to leave?';
    };
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the normal way

    var account = document.getElementById('account').value;
    var password = document.getElementById('password').value;

    if (account === 'test_cloud_infra' && password === 'cloud@infra12') {
        window.location.href = '/dash'; // Redirect to dash.html
    } else {
        alert('Incorrect account name or password');
    }
});

// Show/Hide Password functionality
document.getElementById('showPassword').addEventListener('change', function() {
    var passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text'; // Show password
    } else {
        passwordInput.type = 'password'; // Hide password
    }
}
);





