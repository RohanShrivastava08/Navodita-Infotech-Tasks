document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive navigation menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navbar-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Image gallery lightbox
    const galleryImages = document.querySelectorAll('.gallery .image img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            // Create a modal with the clicked image
            // Add overlay and close button functionality
            // Show modal when image is clicked
        });
    });

    // Form validation
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Validate form fields
        // Display error messages for invalid fields
        // If all fields are valid, submit the form
    });

    // Additional JavaScript functionalities can be added here
});