// logprogress.js
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const title = document.querySelector("input[name='title']").value;
    const description = document.querySelector("input[name='description']").value;
    const doctor = document.querySelector("input[name='doctor']").value;
    const symptoms = document.querySelector("select[name='symptompicklist']").value;
    const otherSymptoms = document.querySelector("textarea[name='otherSymptoms']").value;
    const wellbeing = document.querySelector("select[name='wellbeing']").value;
    const medication = document.querySelector("textarea[name='medication']").value;
    const sideEffects = document.querySelector("textarea[name='sideEffects']").value;
    const activities = document.querySelector("textarea[name='activities']").value;
    const comments = document.querySelector("textarea[name='comments']").value;
    const datetime = new Date().toLocaleString();

    // Create progress data object
    const progressData = {
        title,
        description,
        doctor,
        symptoms,
        otherSymptoms,
        wellbeing,
        medication,
        sideEffects,
        activities,
        comments,
        datetime
    };

    // Save progress data to localStorage
    let progressList = JSON.parse(localStorage.getItem("progressList")) || [];
    progressList.push(progressData);
    localStorage.setItem("progressList", JSON.stringify(progressList));

    // Redirect to myprogress.html
    window.location.href = "myprogress.html";
});