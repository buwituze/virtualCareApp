document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // In case you want to use password, it's retrieved here but not handled

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by username
    const user = users.find(u => u.username === username);

    if (user) {
        // Check the role of the user
        if (user.role === 'doctor') {
            // Redirect to doctor home page
            window.location.href = 'homedoctor.html';
        } else if (user.role === 'patient') {
            // Redirect to patient home page
            window.location.href = 'homepatient.html';
        } else {
            alert('Unknown role. Please contact support.');
        }
    } else {
        alert('User not found. Please check your credentials.');
    }
});
