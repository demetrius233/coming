const intro2 = document.querySelector(".intro-2");
const btnContinue = document.querySelector(".intro-2 a");
const audio = document.querySelector("#audio");
const btnTime = document.querySelector(".time");
const btnPlay = document.querySelector(".btn.play");
const btnPause = document.querySelector(".btn.pause");

const content = document.getElementById("content");
const contentAnime = document.querySelector(".content-anime");
const textLines = document.querySelector(".text-lines");

btnContinue.addEventListener("click", (e) => {
  intro2.style.display = "none";

  audio.play();
  btnTime.classList.add("play");
  btnTime.classList.remove("pause");

  btnPlay.style.display = "none";
  btnPause.style.display = "block";

  content.classList.add("active");
  contentAnime.classList.add("active");
  textLines.classList.add("active");
});

btnTime.addEventListener("click", () => {
  if (btnTime.classList.contains("pause")) {
    btnTime.classList.remove("pause");
    btnTime.classList.add("play");
    audio.play();

    btnPlay.style.display = "none";
    btnPause.style.display = "block";
  } else {
    btnTime.classList.add("pause");
    btnTime.classList.remove("play");
    audio.pause();

    btnPlay.style.display = "block";
    btnPause.style.display = "none";
  }
});
