(function () {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.background = "#111";
  container.style.color = "#fff";
  container.style.padding = "12px 20px";
  container.style.borderRadius = "10px";
  container.style.fontSize = "16px";
  container.style.fontWeight = "bold";
  container.style.zIndex = "9999";
  container.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  container.innerHTML = "⏳ Cargando contador...";

  document.body.appendChild(container);

  // Tiempo objetivo (24h desde ahora)
  const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      container.innerHTML = "🔥 Oferta terminada";
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    container.innerHTML = `🔥 Oferta termina en ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
})();
