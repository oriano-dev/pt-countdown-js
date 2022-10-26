// Manipulation du DOM

const countdown = document.getElementById("countdown");
const content = document.getElementById("content");

// Compte à rebours
setInterval(() => {
  // Tant qu'on est au dessus de 0, on enlève 1
  if (parseInt(countdown.innerText) > 0) {
    countdown.innerText = parseInt(countdown.innerText) - 1;
    // Dès qu'on atteint 0, on affiche le contenu à la place du compte à rebours
  } else {
    countdown.style.display = "none";
    content.style.display = "block";
  }
}, 1000);
