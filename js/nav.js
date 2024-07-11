document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('click', function () {
        const submenu = this.querySelector('.submenu');
        const isOpen = submenu.style.display === "block";  

        // Close all submenus
        document.querySelectorAll('.submenu').forEach(function (submenu) {
            submenu.style.display = "none";
        });

        // Toggle the clicked submenu
        if (!isOpen) {
            submenu.style.display = "block";
        }
    });
});
