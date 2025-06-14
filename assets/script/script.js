function expandGameMovie() {
  document.getElementById("modal-movie").style.display = "block";
  document.body.style.overflow = "hidden";
}

function expandGameMusic() {
  document.getElementById("modal-music").style.display = "block";
  document.body.style.overflow = "hidden";
}

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.game-card').forEach(card => {
      card.classList.add('floating-card');
    });
  });

function closeModal() {
  document.getElementById("modal-movie").style.display = "none";
    document.getElementById("modal-music").style.display = "none";
  document.body.style.overflow = "auto";
}


window.addEventListener("DOMContentLoaded", () => {
  let toggle = true;
  const anakImg = document.getElementById("anak-img");
  const bubbleImg = document.getElementById("bubble-img");

  setInterval(() => {
    if (anakImg) {
      anakImg.src = toggle ? "assets/images/dontol2.png" : "assets/images/dontol.png";
    }
    if (bubbleImg) {
      bubbleImg.src = toggle ? "assets/images/bubble2.png" : "assets/images/bubble.png";
    }
    toggle = !toggle;
  }, 5000); // setiap 1 detik
});

