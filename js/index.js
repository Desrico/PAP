const carouselSlides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
  carouselSlides[currentIndex].style.display = "none";
  carouselSlides[index].style.display = "block";
  currentIndex = index;
}

function nextSlide() {
  showSlide((currentIndex + 1) % carouselSlides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + carouselSlides.length) % carouselSlides.length);
}

document.querySelector(".carousel").addEventListener("click", nextSlide);

setInterval(nextSlide, 3000);
