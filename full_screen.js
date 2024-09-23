// Function to toggle fullscreen mode on main image
document.querySelector('.main_img img').addEventListener('click', function () {
    // Create the fullscreen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    // Add the image to the fullscreen container
    const fullscreenImage = this.cloneNode(); // Clone the clicked image
    fullscreenContainer.appendChild(fullscreenImage);

    // Add the fullscreen container to the body
    document.body.appendChild(fullscreenContainer);

    // Close the fullscreen when the image is clicked
    fullscreenImage.addEventListener('click', function () {
        document.body.removeChild(fullscreenContainer); // Remove the fullscreen container
    });
});

