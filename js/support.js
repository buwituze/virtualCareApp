document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.faq .question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});