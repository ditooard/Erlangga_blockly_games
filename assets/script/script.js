function expandGame() {
  document.getElementById("modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

function showGameDetail(gameName) {
  const detailBox = document.getElementById("game-detail");
  let content = "";

  if (gameName === "music") {
    content = `
      <h2>BLOCKLY MOVIE</h2>
      <p>Game edukasi yang mengenalkan konsep <strong>path-finding</strong> atau pencarian jalur menggunakan mobil balap. Cocok untuk mengenalkan logika dan algoritma sederhana.</p>
    `;
  } else if (gameName === "Meow Maze") {
    content = `
      <h2>BLOCKLY MUSICe</h2>
      <p>Bantu kucing imut melewati labirin sambil belajar <strong>algoritma dasar</strong> secara menyenangkan. Game ini ideal untuk siswa SD atau SMP.</p>
    `;
  }

  detailBox.innerHTML = content;
  detailBox.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const anakImg = document.getElementById("anak-img");
    const bubbleImg = document.getElementById("bubble-img");

    if (anakImg) anakImg.src = "assets/images/dontol2.png";
    if (bubbleImg) bubbleImg.src = "assets/images/bubble2.png";
  }, 3000); // 3 detik
});
