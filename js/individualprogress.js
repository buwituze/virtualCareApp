// individualprogress.js

document.addEventListener('DOMContentLoaded', function() {
    const individualProgressData = JSON.parse(localStorage.getItem('selectedProgress'));

    if (individualProgressData) {
        // Fill in the progress details
        document.querySelector('.latestprogresstitle h4').textContent = `Your Progress form on ${individualProgressData.title}`;
        document.querySelector('.checkprogress').innerHTML += `<div class="progressstatus" style="background-color: ${getProgressStatusColor(individualProgressData.wellbeing)}"></div>`;
        
        document.querySelector('.latestprogress p:nth-of-type(1)').textContent = `Time Logged: ${individualProgressData.datetime}`;
        document.querySelector('.latestprogress p:nth-of-type(2)').textContent = `Corresponding Doctor: ${individualProgressData.doctor}`;
        document.querySelector('.latestprogress p:nth-of-type(3)').textContent = `Progress Status: ${individualProgressData.wellbeing}`;
        
        // Display all contents from logprogressformcontents
        document.querySelector('.latestprogress p:nth-of-type(4)').innerHTML = individualProgressData.logprogressformcontents;
    } else {
        // Handle the case where no data is available (e.g., redirect to another page or show a message)
        document.querySelector('.latestprogress').innerHTML = '<p>No progress data found.</p>';
    }
});

// Utility function to get the color based on well-being status
function getProgressStatusColor(status) {
    switch (status.toLowerCase()) {
        case 'better':
            return 'green';
        case 'same':
            return 'yellow';
        case 'worse':
            return 'red';
        default:
            return 'grey';
    }
}
