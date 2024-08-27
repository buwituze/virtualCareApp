document.getElementById('upload').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const fileInput = document.getElementById('file').files[0];
    const titleInput = document.getElementById('title').value.trim();

    if (!recipient || !fileInput || !titleInput) {
        alert('Please select a recipient, a file, and enter a title.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const fileData = {
            title: titleInput,
            dataUrl: e.target.result,
            type: fileInput.type,
            size: fileInput.size,
            lastModified: fileInput.lastModified,
            isLink: false
        };

        routeFile(fileData, recipient);
    };
    reader.readAsDataURL(fileInput);
});

document.getElementById('uploadlink').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const fileLink = document.getElementById('link').value.trim();
    const titleInput = document.getElementById('title').value.trim();

    if (!recipient || !fileLink || !titleInput) {
        alert('Please select a recipient, enter a file link, and a title.');
        return;
    }

    const fileData = {
        title: titleInput,
        link: fileLink,
        isLink: true
    };

    routeFile(fileData, recipient);
});

function routeFile(fileData, recipient) {
    if (recipient === 'patient') {
        saveToLocalStorage(fileData, 'patientFiles');
    } else if (recipient === 'healthworker') {
        saveToLocalStorage(fileData, 'doctorFiles');
    }
    resetForm();
}

function saveToLocalStorage(fileData, storageKey) {
    let storedFiles = JSON.parse(localStorage.getItem(storageKey)) || [];
    storedFiles.push(fileData);
    localStorage.setItem(storageKey, JSON.stringify(storedFiles));
}

function resetForm() {
    document.getElementById('recipient').value = '';
    document.getElementById('file').value = '';
    document.getElementById('link').value = '';
    document.getElementById('title').value = '';
}