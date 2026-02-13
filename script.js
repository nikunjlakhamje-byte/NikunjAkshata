

/*const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClicked() {
  document.getElementById("final").style.display = "block";
  launchConfetti();
  window.scrollTo(0, document.body.scrollHeight);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = `hsl(${Math.random()*360},100%,50%)`;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.animation = "fall 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}*/

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

