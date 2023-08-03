const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let slideIndex = 0;
let timer;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.pointerEvents = "none";
  }

  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].style.pointerEvents = "auto";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
  updateDots();
  restartTimer();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
  updateDots();
  restartTimer();
}

// Chamar a função showSlide() para exibir o primeiro slide ao carregar o carrossel
showSlide();

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

restartTimer();

function createDots() {
  const dotsContainer = document.querySelector('.carousel-dots');
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', function () {
      slideIndex = i;
      showSlide();
      updateDots();
      restartTimer();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
}

// Chamar a função createDots() ao carregar o carrossel
window.addEventListener('load', createDots);