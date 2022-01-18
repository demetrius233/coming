const intro = document.querySelector(".intro");
const audio = document.querySelector("#audio");
const btnTime = document.querySelector(".time");
const btnPlay = document.querySelector(".btn.play");
const btnPause = document.querySelector(".btn.pause");

intro.addEventListener("click", (e) => {
  let body = document.querySelector("body");
  let bullet = document.createElement("span");
  bullet.classList.add("bullet");
  let x = e.offsetX;
  let y = e.offsetY;

  bullet.style.left = `${x}px`;
  bullet.style.top = `${y}px`;
  body.appendChild(bullet);

  let images = [
    "url(./images/m1.png)",
    "url(./images/m2.png)",
    "url(./images/m3.png)",
  ];

  let bg = images[Math.floor(Math.random() * images.length)];

  let blood = document.createElement("span");
  blood.classList.add("blood");
  blood.style.backgroundImage = bg;

  blood.style.left = Math.random() * innerWidth + "px";
  blood.style.top = Math.random() * innerHeight + "px";
  body.appendChild(blood);

  setTimeout(() => {
    bullet.remove();
    blood.remove();
  }, 4000);

  setTimeout(() => {
    intro.classList.add("hideIntro");
  }, 2000);

  audio.play();
  btnTime.classList.add("play");
  btnTime.classList.remove("pause");

  btnPlay.style.display = "none";
  btnPause.style.display = "block";
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
