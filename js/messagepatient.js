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
