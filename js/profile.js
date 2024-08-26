document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    const menuItems = document.querySelectorAll('aside ul li');
    const historyDropdown = document.getElementById('history-dropdown');

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            sections.forEach(section => section.classList.remove('active'));
            const sectionToShow = document.getElementById(`${item.innerText.toLowerCase()}-section`);
            if (sectionToShow) sectionToShow.classList.add('active');

            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            item.classList.add('active');
        });
    });

    document.querySelector('aside ul li.active').click();

    window.toggleDropdown = function(id) {
        const dropdown = document.getElementById(id);
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }

    window.showSection = function(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${sectionId}-section`).classList.add('active');
    }
});