window.onload = function() {
    const needle = document.getElementById('needle');
    const percentage = 40; // Set the percentage here
    const degrees = (percentage / 100) * 180;
    needle.style.transform = `rotate(${degrees}deg)`;
};