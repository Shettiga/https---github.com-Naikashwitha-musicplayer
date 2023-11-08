// settings.js

// Function to handle the "Save Settings" button click
function saveSettings() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var notifications = document.getElementById("notifications").checked;
    var theme = document.getElementById("theme").value;

    // You can save or update these settings as needed (e.g., using AJAX to send data to a server).
    // Here, we'll just display an alert with the settings.
    alert("Username: " + username + "\nEmail: " + email + "\nPassword: " + password + "\nReceive Notifications: "
