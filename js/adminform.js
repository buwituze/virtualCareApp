// document.getElementById('user-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Gather form data
//     const userRole = document.getElementById('userrole').value;
//     const fullName = document.getElementById('fullname').value;
//     const username = document.getElementById('username').value;
//     const idNumber = document.getElementById('idnumber').value;
//     const licenseNumber = document.getElementById('licensenumber').value || 'N/A'; // Only for doctors
//     const email = document.getElementById('email').value;

//     // Create a user object
//     const user = {
//         role: userRole,
//         fullName: fullName,
//         username: username,
//         idNumber: idNumber,
//         licenseNumber: licenseNumber,
//         email: email
//     };

//     // Get existing users from localStorage or initialize an empty array
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     // Add the new user to the array
//     users.push(user);

//     // Save the updated users array back to localStorage
//     localStorage.setItem('users', JSON.stringify(users));

//     // Reset the form
//     this.reset();

//     // Show a success message
//     alert('User added successfully!');
// });

document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form data
    const userRole = document.getElementById('userrole').value;
    const fullName = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const idNumber = document.getElementById('idnumber').value;
    const licenseNumber = document.getElementById('licensenumber').value || 'N/A'; // Only for doctors
    const email = document.getElementById('email').value;

    // Validate the role
    if (userRole !== 'doctor' && userRole !== 'patient') {
        alert('Invalid role selected. Please choose either Doctor or Patient.');
        return;
    }

    // Create a user object
    const user = {
        role: userRole,
        fullName: fullName,
        username: username,
        idNumber: idNumber,
        licenseNumber: licenseNumber,
        email: email
    };

    // Get existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    users.push(user);

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Reset the form
    this.reset();

    // Show a success message
    alert('User added successfully!');
});