const PEPE_IMG = document.querySelector("#🐸");
const PEPE_AUDIO = document.querySelector("#🎵");

document.addEventListener("mousedown", () => {
    PEPE_IMG.src = "./src/media/PET-THE-PEEPO.webp";
    PEPE_AUDIO.play();
});

document.addEventListener("mouseup", () => {
    PEPE_IMG.src = "./src/media/pepe-static.png";
    PEPE_AUDIO.pause();
});