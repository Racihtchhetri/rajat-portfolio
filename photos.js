function handleResize() {
    const isNarrow = window.innerWidth <= 450;
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        if (isNarrow) {
            container.classList.remove('d-flex');
            container.classList.add('d-block');
        } else {
            container.classList.remove('d-block');
            container.classList.add('d-flex');
        }
    });
}

// Set initial value
handleResize();

// Add event listener for window resize
window.addEventListener('resize', handleResize);