
document.addEventListener("DOMContentLoaded", function() {
    const menubar = document.querySelector(".menu-icon");
    
    if (menubar) {
        menubar.addEventListener("click", function() {
            const sidebar = document.querySelector(".side-bar");
            if (sidebar) {
             sidebar.classList.toggle("active");
            } else {
                console.error("Sidebar element not found.");
            }
        });
    } else {
        console.error("Menubar element not found.");
    }
});

     