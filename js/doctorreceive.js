// Doctor's Message Viewing Logic
document.addEventListener('DOMContentLoaded', function() {
    const messageContainer = document.querySelector('.message-container');
    const currentUser = "Doctor"; // Simulating the logged-in doctor

    // Function to load messages from localStorage
    function loadMessages() {
        const conversation = JSON.parse(localStorage.getItem('patientToDoctor')) || [];
        messageContainer.innerHTML = ''; // Clear previous messages

        conversation.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', message.sender === currentUser ? 'outgoing' : 'incoming');

            messageDiv.innerHTML = `
                <h3>${message.sender}</h3>
                <p>${message.content}</p>
                <span class="timestamp">${new Date(message.timestamp).toLocaleTimeString()}</span>
            `;
            messageContainer.appendChild(messageDiv);
        });
    }

    // Load the existing conversation when the page is loaded
    loadMessages();
});
