document.addEventListener('DOMContentLoaded', function () {
    const patientsTableBody = document.querySelector('.clientstable table');
    
    // Get patients from localStorage
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    
    // Iterate over the patients and populate the table
    patients.forEach(patient => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${patient.fullName}</td>
            <td>${patient.username}</td>
            <td>${patient.idNumber}</td>
            <td>${patient.email}</td>
            <td>${patient.gender}</td>
            <td>Progress TBD</td>
            <td>Contact TBD</td>
            <td>Location TBD</td>
            <td><button>Delete</button></td>
        `;
        
        patientsTableBody.appendChild(row);
    });
});
