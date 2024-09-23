// Array of small images (we'll retrieve them dynamically)
const smallImages = Array.from(document.querySelectorAll('.small_img button img'));

// Function to update the main image and fullscreen image
function updateImage(index, container) {
    const imgElement = container.querySelector('img');
    imgElement.src = smallImages[index].src;
}

// Helper to update button visibility based on index
function updateArrowVisibility(index, leftButton, rightButton) {
    if (index === 0) {
        leftButton.classList.add('hidden');
    } else {
        leftButton.classList.remove('hidden');
    }
    if (index === smallImages.length - 1) {
        rightButton.classList.add('hidden');
    } else {
        rightButton.classList.remove('hidden');
    }
}

// Main image section
let currentIndex = 0;
const mainLeftArrow = document.querySelector('.left-arrow');
const mainRightArrow = document.querySelector('.right-arrow');
const mainImageContainer = document.querySelector('.main_img');

// Initial button visibility
updateArrowVisibility(currentIndex, mainLeftArrow, mainRightArrow);

// Event listeners for main image navigation
mainLeftArrow.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage(currentIndex, mainImageContainer);
        updateArrowVisibility(currentIndex, mainLeftArrow, mainRightArrow);
    }
});

mainRightArrow.addEventListener('click', function () {
    if (currentIndex < smallImages.length - 1) {
        currentIndex++;
        updateImage(currentIndex, mainImageContainer);
        updateArrowVisibility(currentIndex, mainLeftArrow, mainRightArrow);
    }
});

// Fullscreen image functionality
document.querySelector('.main_img img').addEventListener('click', function () {
    // Create the fullscreen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    // Add the image to the fullscreen container
    const fullscreenImage = this.cloneNode(); // Clone the clicked image
    fullscreenContainer.appendChild(fullscreenImage);

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;'; // X symbol
    closeButton.classList.add('close-btn');
    fullscreenContainer.appendChild(closeButton);

    // Add left and right arrows to fullscreen container
    const fullscreenLeftArrow = document.createElement('button');
    fullscreenLeftArrow.innerHTML = '&lt;';
    fullscreenLeftArrow.classList.add('left-arrow');
    fullscreenContainer.appendChild(fullscreenLeftArrow);

    const fullscreenRightArrow = document.createElement('button');
    fullscreenRightArrow.innerHTML = '&gt;';
    fullscreenRightArrow.classList.add('right-arrow');
    fullscreenContainer.appendChild(fullscreenRightArrow);

    // Add the fullscreen container to the body
    document.body.appendChild(fullscreenContainer);

    // Close the fullscreen when the close button is clicked
    closeButton.addEventListener('click', function () {
        document.body.removeChild(fullscreenContainer); // Remove the fullscreen container
    });

    // Set the correct index for the fullscreen image
    let fullscreenIndex = currentIndex;
    updateArrowVisibility(fullscreenIndex, fullscreenLeftArrow, fullscreenRightArrow);

    // Fullscreen navigation logic
    fullscreenLeftArrow.addEventListener('click', function () {
        if (fullscreenIndex > 0) {
            fullscreenIndex--;
            updateImage(fullscreenIndex, fullscreenContainer);
            updateArrowVisibility(fullscreenIndex, fullscreenLeftArrow, fullscreenRightArrow);
        }
    });

    fullscreenRightArrow.addEventListener('click', function () {
        if (fullscreenIndex < smallImages.length - 1) {
            fullscreenIndex++;
            updateImage(fullscreenIndex, fullscreenContainer);
            updateArrowVisibility(fullscreenIndex, fullscreenLeftArrow, fullscreenRightArrow);
        }
    });
});
