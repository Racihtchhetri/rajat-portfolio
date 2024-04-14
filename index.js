document.addEventListener('DOMContentLoaded', function () {
    const hoverImage = document.getElementById('hoverImage');
    const socials = document.getElementById('social');

    hoverImage.addEventListener('mouseover', function () {
      hoverImage.classList.add('hovered');
      socials.style.display = 'block';
    });

    hoverImage.addEventListener('mouseout', function () {
      hoverImage.classList.remove('hovered');
      socials.style.display = 'none';
    });
  });