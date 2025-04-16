let isPlaying = false;
const audio = document.getElementById('musica');
const playPauseBtn = document.getElementById('playPauseBtn');
let currentSlide = 0;

const slides = [
  'foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg', 'foto5.jpeg',
  'foto6.jpeg', 'foto7.jpeg', 'foto8.jpeg', 'foto9.jpeg', 'foto10.jpeg',
  'foto11.jpeg', 'foto12.jpeg', 'foto13.jpeg', 'foto14.jpeg', 'foto15.jpeg',
  'foto16.jpeg', 'foto17.jpeg', 'foto18.jpeg', 'foto19.jpeg', 'foto20.jpeg',
  'foto21.jpeg', 'foto22.jpeg'
];


const slideImage = document.getElementById('slide-image');

// Função para ir para a próxima imagem do slider
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  slideImage.src = slides[currentSlide];
}

// Função para ir para a imagem anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slideImage.src = slides[currentSlide];
}

// Função para alternar play/pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.classList.remove('pause');
    playPauseBtn.classList.add('play');
  } else {
    audio.play();
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
  }
  isPlaying = !isPlaying;
}

