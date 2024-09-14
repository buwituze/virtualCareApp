// Patient's Message Sending Logic
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message');
    const sendButton = document.querySelector('.sendmessageactions button');
    const messageContainer = document.querySelector('.message-container');
    const currentUser = "Patient"; // Simulating current patient user
    const recipient = "Doctor"; // Simulating message is for the doctor

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

    // Send message when the button is clicked
    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();

        if (messageText !== '') {
            const conversation = JSON.parse(localStorage.getItem('patientToDoctor')) || [];

            const newMessage = {
                sender: currentUser,
                recipient: recipient,
                content: messageText,
                timestamp: Date.now(),
            };

            // Add the new message to the conversation
            conversation.push(newMessage);
            localStorage.setItem('patientToDoctor', JSON.stringify(conversation));

            // Append the new message to the container
            const outgoingMessage = document.createElement('div');
            outgoingMessage.classList.add('message', 'outgoing');

            outgoingMessage.innerHTML = `
                <h3>${newMessage.sender}</h3>
                <p>${newMessage.content}</p>
                <span class="timestamp">${new Date(newMessage.timestamp).toLocaleTimeString()}</span>
            `;

            messageContainer.appendChild(outgoingMessage);
            messageInput.value = ''; // Clear the input after sending
        }
    });
});