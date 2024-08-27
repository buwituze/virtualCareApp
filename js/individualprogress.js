
// document.addEventListener("DOMContentLoaded", function() {
//     const individualProgressData = JSON.parse(localStorage.getItem("selectedProgress"));

//     // Debugging: Log the entire progress data to inspect what was retrieved
//     console.log('Selected Progress Data:', individualProgressData);

//     if (individualProgressData) {
//         document.querySelector(".latestprogresstitle h4").textContent = `Your Progress form on ${individualProgressData.title}`;

//         const progressStatus = document.createElement("div");
//         progressStatus.classList.add("progressstatus");
//         progressStatus.style.backgroundColor = getProgressStatusColor(individualProgressData.wellbeing);
//         document.querySelector(".checkprogress").appendChild(progressStatus);

//         document.querySelector(".latestprogress p:nth-of-type(1)").textContent = `Time Logged: ${individualProgressData.datetime}`;
//         document.querySelector(".latestprogress p:nth-of-type(2)").textContent = `Corresponding Doctor: ${individualProgressData.doctor}`;
//         document.querySelector(".latestprogress p:nth-of-type(3)").textContent = `Progress Status: ${individualProgressData.wellbeing}`;
        
//         // Debugging: Log the form content specifically to check if it's present
//         console.log('Form Content:', individualProgressData.logprogressformcontents);

//         const contentElement = document.querySelector('.latestprogress p:nth-of-type(4)');
//         if (individualProgressData.logprogressformcontents && individualProgressData.logprogressformcontents.trim() !== "") {
//             contentElement.innerHTML = individualProgressData.logprogressformcontents;
//         } else {
//             contentElement.textContent = "No additional details provided.";
//         }
//     } else {
//         document.querySelector(".latestprogress").innerHTML = '<p>No progress data found.</p>';
//     }
// });

// function getProgressStatusColor(status) {
//     switch (status.toLowerCase()) {
//         case "better":
//             return "green";
//         case "same":
//             return "yellow";
//         case "worse":
//             return "red";
//         default:
//             return "grey";
//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    const individualProgressData = JSON.parse(localStorage.getItem("selectedProgress"));

    // Debugging: Log the entire progress data to inspect what was retrieved
    console.log('Selected Progress Data:', individualProgressData);
    console.log('Form Content:', individualProgressData.logprogressformcontents);

    if (individualProgressData) {
        document.querySelector(".latestprogresstitle h4").textContent = `Your Progress form on ${individualProgressData.title}`;

        const progressStatus = document.createElement("div");
        progressStatus.classList.add("progressstatus");
        progressStatus.style.backgroundColor = getProgressStatusColor(individualProgressData.wellbeing);
        document.querySelector(".checkprogress").appendChild(progressStatus);

        document.querySelector(".latestprogress p:nth-of-type(1)").textContent = `Time Logged: ${individualProgressData.datetime}`;
        document.querySelector(".latestprogress p:nth-of-type(2)").textContent = `Corresponding Doctor: ${individualProgressData.doctor}`;
        document.querySelector(".latestprogress p:nth-of-type(3)").textContent = `Progress Status: ${individualProgressData.wellbeing}`;

        // Display the form content or a fallback message if it's missing
        const contentElement = document.querySelector('.latestprogress p:nth-of-type(4)');
        if (individualProgressData.logprogressformcontents && individualProgressData.logprogressformcontents.trim() !== "") {
            contentElement.innerHTML = individualProgressData.logprogressformcontents;
        } else {
            contentElement.textContent = "No additional details provided.";
        }
    } else {
        document.querySelector(".latestprogress").innerHTML = '<p>No progress data found.</p>';
    }
});

function getProgressStatusColor(status) {
    switch (status.toLowerCase()) {
        case "better":
            return "green";
        case "same":
            return "yellow";
        case "worse":
            return "red";
        default:
            return "grey";
    }
}