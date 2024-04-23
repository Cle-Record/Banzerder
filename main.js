setTimeout(function() {
  const gosto = localStorage.opcaoSelecionada;
  if (gosto === "programacao") {
    window.location.href = `programar.html`;
  } else if (gosto === "animes") {
    window.location.href = `animes.html`;
  } else if (gosto === "robotica") {
    window.location.href = `robotica.html`;
  } else {
    window.location.href = `sigup.html`;
  }
}, 3000);