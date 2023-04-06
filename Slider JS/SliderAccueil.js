const images = document.querySelectorAll('.slider img');
const prevArrow = document.querySelector('.slider .prev');
const nextArrow = document.querySelector('.slider .next');
let index = 0;

function changeImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

function showPrevImage() {
  images[index].classList.remove('active');
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add('active');
}

prevArrow.addEventListener('click', showPrevImage);
nextArrow.addEventListener('click', changeImage);

images[index].classList.add('active');
setInterval(changeImage, 5000);