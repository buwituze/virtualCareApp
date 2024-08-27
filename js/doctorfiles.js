// document.addEventListener('DOMContentLoaded', function() {
//     const filesContainer = document.querySelector('.allfiles');
//     const storageKey = filesContainer.classList.contains('patientfiles') ? 'patientFiles' : 'doctorFiles';
//     const storedFiles = JSON.parse(localStorage.getItem(storageKey)) || [];

//     storedFiles.forEach(fileData => {
//         const fileDiv = document.createElement('div');
//         fileDiv.classList.add('file');

//         let fileContent = fileData.isLink 
//             ? `<a href="${fileData.link}" target="_blank">${fileData.name}</a>` 
//             : `<p>${fileData.name} (${fileData.fileName}) - ${fileData.size} bytes</p>`;

//         fileDiv.innerHTML = `
//             ${fileContent}
//             <div class="actions">
//                 <button class="view-btn">View</button>
//                 <button class="download-btn">Download</button>
//             </div>
//         `;

//         fileDiv.querySelector('.view-btn').addEventListener('click', function() {
//             openPopover(fileData);
//         });

//         fileDiv.querySelector('.download-btn').addEventListener('click', function() {
//             downloadFile(fileData);
//         });

//         filesContainer.appendChild(fileDiv);
//     });
// });

// function openPopover(fileData) {
//     const popover = document.createElement('div');
//     popover.style.width = '600px';
//     popover.style.height = '570px';
//     popover.style.position = 'fixed';
//     popover.style.top = '50%';
//     popover.style.left = '50%';
//     popover.style.transform = 'translate(-50%, -50%)';
//     popover.style.backgroundColor = '#fff';
//     popover.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
//     popover.style.zIndex = '1000';
//     popover.style.padding = '20px';
//     popover.style.overflowY = 'auto';

//     const closeButton = document.createElement('button');
//     closeButton.textContent = 'Close';
//     closeButton.style.float = 'right';
//     closeButton.style.marginBottom = '10px';
//     closeButton.addEventListener('click', function() {
//         document.body.removeChild(popover);
//     });

//     let content = '';
//     if (fileData.isLink) {
//         content = `<iframe src="${fileData.link}" width="100%" height="100%"></iframe>`;
//     } else if (fileData.dataUrl) {
//         if (fileData.type.includes('image')) {
//             content = `<img src="${fileData.dataUrl}" alt="${fileData.name}" style="max-width:100%; height:auto;">`;
//         } else if (fileData.type.includes('pdf')) {
//             content = `<iframe src="${fileData.dataUrl}" width="100%" height="100%"></iframe>`;
//         } else if (fileData.type.includes('presentation') || fileData.type.includes('powerpoint') || fileData.type.includes('excel')) {
//             content = `<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileData.dataUrl)}" width="100%" height="100%"></iframe>`;
//         } else {
//             content = `<p>Unable to display file content. Please download it.</p>`;
//         }
//     }

//     popover.innerHTML = content;
//     popover.appendChild(closeButton);
//     document.body.appendChild(popover);
// }

// function downloadFile(fileData) {
//     if (fileData.isLink) {
//         window.open(fileData.link, '_blank');
//     } else if (fileData.dataUrl) {
//         const a = document.createElement('a');
//         a.href = fileData.dataUrl;
//         a.download = fileData.fileName || 'downloaded_file';
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     } else {
//         alert('Download not available for this file type.');
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    const filesContainer = document.querySelector('.allfiles');
    const storedFiles = JSON.parse(localStorage.getItem('doctorFiles')) || [];

    storedFiles.forEach(fileData => {
        const fileDiv = document.createElement('div');
        fileDiv.classList.add('file');

        let fileContent = '';
        if (fileData.isLink) {
            fileContent = `<a href="${fileData.link}" target="_blank">${fileData.title}</a>`;
        } else {
            fileContent = `<p>${fileData.title} (${fileData.type}) - ${fileData.size} bytes</p>`;
        }

        fileDiv.innerHTML = `
            ${fileContent}
            <div class="actions">
                <button class="view-btn">View</button>
                <button class="download-btn">Download</button>
            </div>
        `;

        fileDiv.querySelector('.view-btn').addEventListener('click', function() {
            openPopover(fileData);
        });

        fileDiv.querySelector('.download-btn').addEventListener('click', function() {
            downloadFile(fileData);
        });

        filesContainer.appendChild(fileDiv);
    });
});

function openPopover(fileData) {
    const popover = document.createElement('div');
    popover.style.width = '600px';
    popover.style.height = '570px';
    popover.style.position = 'fixed';
    popover.style.top = '50%';
    popover.style.left = '50%';
    popover.style.transform = 'translate(-50%, -50%)';
    popover.style.backgroundColor = '#fff';
    popover.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    popover.style.zIndex = '1000';
    popover.style.padding = '20px';
    popover.style.overflowY = 'auto';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.float = 'right';
    closeButton.style.marginBottom = '10px';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popover);
    });

    let content = '';
    if (fileData.isLink) {
        content = `<iframe src="${fileData.link}" width="100%" height="100%"></iframe>`;
    } else if (fileData.dataUrl) {
        if (fileData.type.includes('image')) {
            content = `<img src="${fileData.dataUrl}" alt="${fileData.title}" style="max-width:100%; height:auto;">`;
        } else if (fileData.type.includes('pdf')) {
            content = `<iframe src="${fileData.dataUrl}" width="100%" height="100%"></iframe>`;
        } else if (fileData.type.includes('presentation') || fileData.type.includes('powerpoint') || fileData.type.includes('excel')) {
            content = `<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileData.dataUrl)}" width="100%" height="100%"></iframe>`;
        } else {
            content = `<p>Unable to display file content. Please download it.</p>`;
        }
    }

    popover.innerHTML = content;
    popover.appendChild(closeButton);
    document.body.appendChild(popover);
}

function downloadFile(fileData) {
    if (fileData.isLink) {
        window.open(fileData.link, '_blank');
    } else if (fileData.dataUrl) {
        const a = document.createElement('a');
        a.href = fileData.dataUrl;
        a.download = fileData.title || 'downloaded_file';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert('Download not available for this file type.');
    }
    
}
