document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Gather form data
    const fullName = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const idNumber = document.getElementById('idnumber').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('selectgender').value;
    
    // Create a patient object
    const patient = {
        fullName: fullName,
        username: username,
        idNumber: idNumber,
        email: email,
        gender: gender
    };
    
    // Get existing patients from localStorage or initialize an empty array
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    
    // Add the new patient to the array
    patients.push(patient);
    
    // Save the updated patients array back to localStorage
    localStorage.setItem('patients', JSON.stringify(patients));
    
    // Optionally, redirect or show success message
    alert('Patient added successfully!');
});
