const music = document.getElementById("music");
const playPause = document.getElementById("playPause");

playPause.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPause.textContent = "⏸";
  } else {
    music.pause();
    playPause.textContent = "▶";
  }
});

// ================================
// ================================
// GALERIA 3 EM 3 + ANIMAÇÃO + LEGENDA
// ================================

// Lista de fotos
const photos = [
  "src/img1.jpeg",
  "src/img2.jpeg",
  "src/img3.jpeg",
  "src/img4.jpeg",
  "src/img6.jpeg",
  "src/img5.jpeg"
];

// Legendas correspondentes às fotos
const captions = [
  "quase um dia das mães kakakak ",
  "Nosso joguin🎮",
  "Essa foto sempre me faz sorrir",
  "essa foto ficou pika",
  "Através da minha janela? kakak",
  "Mais um momento pra guardar pra sempre"
];

// Índice da foto central
let currentIndex = 0;

// Elementos do DOM
const mainPhoto  = document.getElementById("mainPhoto");
const leftPhoto  = document.getElementById("leftPhoto");
const rightPhoto = document.getElementById("rightPhoto");
const captionEl  = document.getElementById("caption");

const prevBtn = document.getElementById("prevPhoto");
const nextBtn = document.getElementById("nextPhoto");

// -------------------------------
// Atualiza galeria com animação
// -------------------------------
function updateGallery() {

  // Ativa animação
  mainPhoto.classList.add("fade");
  leftPhoto.classList.add("fade");
  rightPhoto.classList.add("fade");

  // Pequeno delay pra troca parecer suave
  setTimeout(() => {

    const leftIndex  = (currentIndex - 1 + photos.length) % photos.length;
    const rightIndex = (currentIndex + 1) % photos.length;

    // Atualiza imagens
    mainPhoto.src  = photos[currentIndex];
    leftPhoto.src  = photos[leftIndex];
    rightPhoto.src = photos[rightIndex];

    // Atualiza legenda
    captionEl.textContent = captions[currentIndex];

    // Remove animação
    mainPhoto.classList.remove("fade");
    leftPhoto.classList.remove("fade");
    rightPhoto.classList.remove("fade");

  }, 200);
}

// Inicializa
updateGallery();

// -------------------------------
// Botão PRÓXIMA
// -------------------------------
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % photos.length;
  updateGallery();
});

// -------------------------------
// Botão ANTERIOR
// -------------------------------
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateGallery();
});

// ================================
// SWIPE NO CELULAR
// ================================

let startX = 0;

mainPhoto.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

mainPhoto.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50) {
    nextBtn.click();
  } else if (diff < -50) {
    prevBtn.click();
  }
});
