
"use strict";

// ===== Mobile navigation =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// ===== Automatic copyright year =====
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// ===== Contact form =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const message = document.getElementById("visitorMessage").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please complete all fields.";
        return;
    }

    // Replace this example address with your real email address.
    const portfolioEmail = "ayush@example.com";

    const subject = encodeURIComponent(
        "Portfolio enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formStatus.textContent =
        "Opening your email application. Send the message there to complete delivery.";

    window.location.href =
        "mailto:" + portfolioEmail +
        "?subject=" + subject +
        "&body=" + body;
});
