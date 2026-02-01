const music = document.getElementById("music");
const playPause = document.getElementById("playPause");
const progressBar = document.getElementById("progressBar");

playPause.onclick = () => {
  if (music.paused) {
    music.play();
    playPause.textContent = "⏸";
  } else {
    music.pause();
    playPause.textContent = "▶";
  }
};

music.addEventListener("timeupdate", () => {
  progressBar.style.width = (music.currentTime / music.duration) * 100 + "%";
});

// GALERIA
const photos = [
  "src/img1.jpeg",
  "src/img2.jpeg",
  "src/img3.jpeg",
  "src/img4.jpeg",
  "src/img6.jpeg",
  "src/img5.jpeg",
  "src/foto1.jpeg",
  "src/foto2.jpeg",
  "src/foto3.jpeg",
  "src/foto4.jpeg",
  "src/foto5.jpeg",
  "src/foto6.jpeg",
  "src/foto7.jpeg",
  "src/foto8.jpeg",
  "src/foto9.jpeg",
  "src/foto10.jpeg",
  "src/foto11.jpeg",
  "src/foto12.jpeg",
  "src/foto13.jpeg",
  "src/foto14.jpeg",
  "src/foto15.jpeg",
  "src/foto16.jpeg",
  "src/foto17.jpeg",
  "src/foto18.jpeg",
  "src/foto19.jpeg",
  "src/foto20.jpeg",
  "src/foto21.jpeg",
  "src/foto22.jpeg"
];

const captions = [
  "o começo de tudo 💜",
  "um dos meus dias favoritos",
  "nessa foto eu já sabia",
  "a gente do nosso jeitinho",
  "meu sorriso sempre começa em você",
  "momentos simples, mas nossos",
  "essa aqui mora no meu coração",
  "risada que eu nunca esqueço",
  "parece pouco, mas significa muito",
  "com você tudo fica leve",
  "mais um dia pra guardar",
  "eu escolheria esse momento de novo",
  "um detalhe que virou memória",
  "a vida ficou mais bonita aqui",
  "esse dia foi especial",
  "um pedacinho da nossa história",
  "meu lugar favorito",
  "onde eu queria estar",
  "isso aqui é amor",
  "entre tantas fotos, essa",
  "a gente sem esforço",
  "e ainda faltam muitas memórias 💜🧡"
];


const loveLines = [
  "com você tudo faz sentido",
  "meu lugar é ao seu lado",
  "isso aqui é amor",
  "te escolheria sempre",
  "a gente 💜🧡"
];

let index = 0;

const mainPhoto = document.getElementById("mainPhoto");
const leftPhoto = document.getElementById("leftPhoto");
const rightPhoto = document.getElementById("rightPhoto");
const caption = document.getElementById("caption");
const loveText = document.getElementById("loveText");

function updateGallery() {
  const left = (index - 1 + photos.length) % photos.length;
  const right = (index + 1) % photos.length;

  mainPhoto.src = photos[index];
  leftPhoto.src = photos[left];
  rightPhoto.src = photos[right];

  caption.textContent = captions[index];
  loveText.textContent = loveLines[Math.floor(Math.random() * loveLines.length)];
}

updateGallery();

document.getElementById("nextPhoto").onclick = () => {
  index = (index + 1) % photos.length;
  updateGallery();
};

document.getElementById("prevPhoto").onclick = () => {
  index = (index - 1 + photos.length) % photos.length;
  updateGallery();
};

// SWIPE
let startX = 0;
mainPhoto.addEventListener("touchstart", e => startX = e.touches[0].clientX);
mainPhoto.addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (diff > 50) index++, updateGallery();
  if (diff < -50) index--, updateGallery();
});
