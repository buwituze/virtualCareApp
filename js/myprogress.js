// myprogress.js
document.addEventListener("DOMContentLoaded", function() {
    const allLatestProgress = document.querySelector(".allLatestprogress");
    let progressList = JSON.parse(localStorage.getItem("progressList")) || [];

    // Populate latest progress entries
    progressList.forEach((progress, index) => {
        const latestProgress = document.createElement("div");
        latestProgress.classList.add("latestprogress");

        // Set progress status color
        const progressStatus = document.createElement("div");
        progressStatus.classList.add("progressstatus");
        if (progress.wellbeing === "better") {
            progressStatus.style.backgroundColor = "green";
        } else if (progress.wellbeing === "same") {
            progressStatus.style.backgroundColor = "yellow";
        } else if (progress.wellbeing === "worse") {
            progressStatus.style.backgroundColor = "red";
        }

        // Create progress entry content
        const latestProgressTitle = document.createElement("div");
        latestProgressTitle.classList.add("latestprogresstitle");
        latestProgressTitle.innerHTML = `<h4>Progress on ${progress.title}. Corresponding Doctor: ${progress.doctor}</h4>`;

        const progressMessage = document.createElement("p");
        progressMessage.textContent = `You're right on track! Continue on this trajectory and you'll get better in no time!`;

        // Handle click to individual progress
        latestProgress.addEventListener("click", function() {
            localStorage.setItem("selectedProgressIndex", index);
            window.location.href = "individualprogress.html";
        });

        // Append elements to latest progress div
        const checkProgress = document.createElement("div");
        checkProgress.classList.add("checkprogress");
        checkProgress.appendChild(progressStatus);
        checkProgress.appendChild(latestProgressTitle);
        latestProgress.appendChild(checkProgress);
        latestProgress.appendChild(progressMessage);

        // Append latest progress to the list
        allLatestProgress.appendChild(latestProgress);
    });
    // Store the selected progress data and navigate to individual progress page
document.addEventListener('DOMContentLoaded', function() {
    const progressItems = document.querySelectorAll('.latestprogress');
    
    progressItems.forEach((item) => {
        item.addEventListener('click', function() {
            const title = item.querySelector('.latestprogresstitle h4').textContent;
            const datetime = item.querySelector('p:nth-of-type(1)').textContent.split(': ')[1];
            const doctor = item.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
            const wellbeing = item.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
            const logprogressformcontents = item.querySelector('p:nth-of-type(4)').innerHTML;

            const selectedProgress = {
                title: title.replace('Your Progress form on ', ''),
                datetime,
                doctor,
                wellbeing,
                logprogressformcontents
            };

            // Save selected progress to localStorage
            localStorage.setItem('selectedProgress', JSON.stringify(selectedProgress));

            // Redirect to individualprogress.html
            window.location.href = 'individualprogress.html';
        });
    });
});

});