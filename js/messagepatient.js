// Auto resize textarea with max-height
const textarea = document.getElementById('message');
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    if (this.scrollHeight <= 120) {
        this.style.height = this.scrollHeight + 'px';
    } else {
        this.style.height = '120px';
        this.style.overflowY = 'auto';
    }
});

// Emoji picker (simplified version)
document.querySelector('.emoji-icon').addEventListener('click', function() {
    textarea.value += '😊';
});

document.addEventListener('DOMContentLoaded', function() {
    const personnel = [
        { name: 'Dr. Karambizi', role: 'Doctor' },
        { name: 'Dr. Mukamana', role: 'Doctor' },
        { name: 'Byiringiro', role: 'Therapist' },
        { name: 'Nurse Joy', role: 'Nurse' },
        { name: 'Head Nurse Sinclair', role: 'Head Nurse' },
        { name: 'Pharmacist Mukamana', role: 'Pharmacist' }
    ];

    let currentConversation = null;
    const messageContainer = document.querySelector('.message-container');
    const navList = document.querySelector('.nav');
    const searchInput = document.querySelector('.searchmessages input');

    function renderPersonnelList(filteredPersonnel) {
        navList.innerHTML = ''; // Clear current list
        filteredPersonnel.forEach(person => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#">${person.name}</a>`;
            li.addEventListener('click', function() {
                // Update the conversation title
                document.querySelector('.messagestitle h1').textContent = `Messaging ${person.name}`;
                // Clear previous messages when switching
                if (currentConversation !== person.name) {
                    messageContainer.innerHTML = '';
                    messageContainer.style.display = 'none'; // Hide until a message is sent
                    currentConversation = person.name;
                }
            });
            navList.appendChild(li);
        });
    }

    renderPersonnelList(personnel); // Initial render

    // Filter personnel based on search input
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filtered = personnel.filter(person => person.name.toLowerCase().includes(query));
        renderPersonnelList(filtered);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message');
    const sendButton = document.querySelector('.sendmessageactions button');
    const fileInput = document.getElementById('file-input');
    const messageContainer = document.querySelector('.message-container');
    const currentUser = "Your Name"; // Replace with dynamic user data

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        const file = fileInput.files[0]; // Get the attached file

        if (messageText !== '' || file) {
            messageContainer.style.display = 'block'; // Make message-container visible

            // Create outgoing message div
            const outgoingMessage = document.createElement('div');
            outgoingMessage.classList.add('message', 'outgoing');

            let fileAttachment = '';
            if (file) {
                const fileURL = URL.createObjectURL(file); // Create a URL for the attached file
                const fileType = file.type.startsWith('image/') ? 'image' : 'file';

                if (fileType === 'image') {
                    // If the file is an image, display it directly
                    fileAttachment = `<img src="${fileURL}" alt="${file.name}" style="max-width: 200px; max-height: 200px;">`;
                } else {
                    // Otherwise, display it as a downloadable link
                    fileAttachment = `<p><a href="${fileURL}" download="${file.name}">${file.name}</a></p>`;
                }
            }

            outgoingMessage.innerHTML = `
                <h3>${currentUser}</h3>
                <p>${messageText}</p>
                ${fileAttachment}
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
            `;

            messageContainer.appendChild(outgoingMessage);
            messageInput.value = ''; // Clear the input after sending
            fileInput.value = ''; // Clear the file input
        }
    });
});


sendButton.addEventListener('click', function() {
    const messageText = messageInput.value.trim();
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (messageText !== '' || file) {
        messageContainer.style.display = 'block'; // Make message-container visible

        // Create outgoing message div
        const outgoingMessage = document.createElement('div');
        outgoingMessage.classList.add('message', 'outgoing');

        let fileAttachment = '';
        if (file) {
            const fileURL = URL.createObjectURL(file);
            fileAttachment = `<p><a href="${fileURL}" target="_blank">${file.name}</a></p>`;
        }

        outgoingMessage.innerHTML = `
            <h3>${currentUser}</h3>
            <p>${messageText}</p>
            ${fileAttachment}
            <span class="timestamp">${new Date().toLocaleTimeString()}</span>
        `;

        messageContainer.appendChild(outgoingMessage);
        messageInput.value = ''; // Clear the input after sending
        fileInput.value = ''; // Clear the file input
    }
});


document.querySelector('.navlogo p').addEventListener('click', function() {
    window.history.back();
});
