// VELTRONIX GLOBAL FINANCIAL MARKETS

document.addEventListener("DOMContentLoaded", function () {

    // Automatically update copyright year
    document.querySelectorAll("[data-year]").forEach(function(element) {
        element.textContent = new Date().getFullYear();
    });

    // Mobile navigation menu
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function() {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", isOpen);

        });

        // Close menu after clicking a link
        navigation.querySelectorAll("a").forEach(function(link) {

            link.addEventListener("click", function() {

                navigation.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }

});
