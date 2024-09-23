// imageSwitcher.js

function setupImageSwitcher() {
    // Get all the buttons and the main image
    const buttons = document.querySelectorAll('.small_img button');
    const mainImage = document.querySelector('.main_img img');

    // Set up click event listeners for each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Update the main image source
            const newSrc = this.querySelector('img').src;
            mainImage.src = newSrc;
        
            // Remove 'selected' class from all buttons
            buttons.forEach(btn => btn.classList.remove('selected'));

            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });

    // Add 'selected' class to the first button initially
    buttons[0].classList.add('selected');
}

// Ensure the function runs after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', setupImageSwitcher);