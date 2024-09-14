// document.addEventListener('DOMContentLoaded', function () {
//     const usersTableBody = document.querySelector('#userTable tbody');
    
//     // Function to display users
//     function displayUsers() {
//         // Clear the table first
//         usersTableBody.innerHTML = '';
        
//         // Get users from localStorage
//         const users = JSON.parse(localStorage.getItem('users')) || [];
        
//         // Iterate over the users and populate the table
//         users.forEach(user => {
//             const row = document.createElement('tr');
            
//             row.innerHTML = `
//                 <td>${user.idNumber}</td>
//                 <td>${user.fullName}</td>
//                 <td>${user.username}</td>
//                 <td>${user.idNumber}</td>
//                 <td>${user.licenseNumber}</td>
//                 <td>${user.email}</td>
//                 <td>${user.role}</td>
//                 <td><button class="delete-btn" data-id="${user.idNumber}">Delete</button></td>
//             `;
            
//             usersTableBody.appendChild(row);
//         });
//     }

//     // Call the display function to show existing users on page load
//     displayUsers();

//     // Listen for delete button clicks
//     usersTableBody.addEventListener('click', function (e) {
//         if (e.target.classList.contains('delete-btn')) {
//             const userId = e.target.getAttribute('data-id');
            
//             // Get the current users
//             let users = JSON.parse(localStorage.getItem('users')) || [];

//             // Filter out the user to be deleted
//             users = users.filter(user => user.idNumber !== userId);

//             // Update localStorage
//             localStorage.setItem('users', JSON.stringify(users));

//             // Re-render the user table
//             displayUsers();
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const usersTableBody = document.querySelector('#userTable tbody');
    
    // Function to display users
    function displayUsers() {
        // Clear the table first
        usersTableBody.innerHTML = '';
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Iterate over the users and populate the table
        users.forEach(user => {
            // Only display users with valid roles (doctor or patient)
            if (user.role === 'doctor' || user.role === 'patient') {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${user.idNumber}</td>
                    <td>${user.fullName}</td>
                    <td>${user.username}</td>
                    <td>${user.idNumber}</td>
                    <td>${user.licenseNumber}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td><button class="delete-btn" data-id="${user.idNumber}">Delete</button></td>
                `;
                
                usersTableBody.appendChild(row);
            }
        });
    }

    // Call the display function to show existing users on page load
    displayUsers();

    // Listen for delete button clicks
    usersTableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const userId = e.target.getAttribute('data-id');
            
            // Get the current users
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Filter out the user to be deleted
            users = users.filter(user => user.idNumber !== userId);

            // Update localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Re-render the user table
            displayUsers();
        }
    });
});