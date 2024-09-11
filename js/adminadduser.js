const userRoleSelect = document.getElementById('userrole');
const doctorFields = document.getElementById('doctor-fields');

// Add an event listener to the select element to check the selected value
userRoleSelect.addEventListener('change', function() {
    // Show the doctor fields if the role is 'doctor', otherwise hide them
    if (this.value === 'doctor') {
        doctorFields.style.display = 'block';
    } else {
        doctorFields.style.display = 'none';
    }
});