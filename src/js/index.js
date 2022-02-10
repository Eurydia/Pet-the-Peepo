const PEPE_IMG = document.querySelector("#🐸");
const PEPE_AUDIO = document.querySelector("#🎵");

document.addEventListener("mousedown", () => {
    PEPE_IMG.src = "./src/img/PET_THE_PEEPO.webp";
    PEPE_AUDIO.play();
});

document.addEventListener("mouseup", () => {
    PEPE_IMG.src = "./src/img/pepeSad-static.png";
    PEPE_AUDIO.pause();
});