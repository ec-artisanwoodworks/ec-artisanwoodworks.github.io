function setupImageScrolling() {
    const smallImgContainer = document.querySelector('.small_img_container');
    const smallImg = document.querySelector('.small_img');
    const upArrow = document.querySelector('.up_arrow');
    const downArrow = document.querySelector('.down_arrow');
    
    let scrollPosition = 0;

    // Function to adjust the height of the container
    function adjustHeight() {
        const containerHeight = smallImgContainer.offsetHeight;
        smallImgContainer.style.maxHeight = `${containerHeight}px`;
    }

    // Scroll up
    upArrow.addEventListener('click', function() {
        const visibleHeight = smallImgContainer.offsetHeight;
        scrollPosition = Math.max(scrollPosition - visibleHeight / 2, 0);
        smallImg.style.transform = `translateY(-${scrollPosition}px)`;
    });

    // Scroll down
    downArrow.addEventListener('click', function() {
        const visibleHeight = smallImgContainer.offsetHeight;
        const totalHeight = smallImg.scrollHeight;
        scrollPosition = Math.min(scrollPosition + visibleHeight / 2, totalHeight - visibleHeight);
        smallImg.style.transform = `translateY(-${scrollPosition}px)`;
    });

    // Enable mouse scroll
    smallImgContainer.addEventListener('wheel', function(event) {
        event.preventDefault();
        const visibleHeight = smallImgContainer.offsetHeight;
        const totalHeight = smallImg.scrollHeight;

        if (event.deltaY > 0) {
            // Scroll down
            scrollPosition = Math.min(scrollPosition + visibleHeight / 4, totalHeight - visibleHeight);
        } else {
            // Scroll up
            scrollPosition = Math.max(scrollPosition - visibleHeight / 4, 0);
        }

        smallImg.style.transform = `translateY(-${scrollPosition}px)`;
    });

    // Adjust the height when the page loads
    window.addEventListener('load', adjustHeight);
    // Adjust the height when the window is resized
    window.addEventListener('resize', adjustHeight);
}

document.addEventListener('DOMContentLoaded', setupImageScrolling);
