window.onload = function() {
    const isHovered = Array(6).fill(false);
    const videoRefs = Array(6).fill(null);

    const handleMouseEnter = (index) => {
        const updatedHoverState = [...isHovered];
        updatedHoverState[index] = true;
        isHovered[index] = true; // Update the isHovered array
        if (videoRefs[index]) {
            videoRefs[index].play();
        }
    };

    const handleMouseLeave = (index) => {
        const updatedHoverState = [...isHovered];
        updatedHoverState[index] = false;
        isHovered[index] = false; // Update the isHovered array
        if (videoRefs[index]) {
            videoRefs[index].pause();
            videoRefs[index].currentTime = 0;
        }
    };

    const container = document.querySelector('.containerReels .row');
    [1, 2, 3, 7, 8, 9].forEach((reelNumber, index) => {
        const div = document.createElement('div');
        div.classList.add('col-md-2', 'p-0');
        div.style.width = '190px';

        const video = document.createElement('video');
        video.src = `/videos/reel${reelNumber}.mp4`;
        video.className = 'w-100';
        videoRefs[index] = video;

        // Add event listeners for mouse enter and leave
        div.addEventListener('mouseenter', () => handleMouseEnter(index));
        div.addEventListener('mouseleave', () => handleMouseLeave(index));

        div.appendChild(video);
        container.appendChild(div);
    });
};