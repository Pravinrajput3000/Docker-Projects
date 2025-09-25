const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent = "Yay! 💖 You just made me the happiest person alive!";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth - noBtn.clientWidth);
  const y = Math.floor(Math.random() * window.innerHeight - noBtn.clientHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

