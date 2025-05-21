const imageContainers = document.querySelectorAll('.image-container');
const mainImage = document.querySelector('.main-image');

imageContainers.forEach(container => {
  container.addEventListener('click', () => {
    const imgSrc = container.querySelector('img').src;
    mainImage.src = imgSrc;
  });
});
