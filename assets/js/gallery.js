(() => {
  const gallery = document.getElementById("moments");
  if (!gallery) return;

  const buttons = Array.from(gallery.querySelectorAll("[data-gallery-photo]"));
  const photos = buttons.map((button) => {
    const image = button.querySelector("img");
    return {
      src: image.getAttribute("src").replace("-thumb.jpg", ".jpg"),
      alt: image.alt,
      caption: button.closest("figure").querySelector("figcaption > span").textContent,
    };
  });
  const dialog = document.getElementById("gallery-dialog");
  const image = document.getElementById("gallery-full-image");
  const caption = document.getElementById("gallery-caption");
  const counter = document.getElementById("gallery-counter");
  let current = 0;
  let trigger;
  let touchStart;

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.src;
    image.alt = photo.alt;
    caption.textContent = photo.caption;
    counter.textContent = `${current + 1} / ${photos.length}`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      trigger = button;
      showPhoto(Number(button.dataset.galleryPhoto));
      dialog.showModal();
      document.body.classList.add("gallery-is-open");
    });
  });

  dialog.querySelector(".gallery-prev").addEventListener("click", () => showPhoto(current - 1));
  dialog.querySelector(".gallery-next").addEventListener("click", () => showPhoto(current + 1));
  dialog.querySelector(".gallery-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(current + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  image.addEventListener("touchstart", (event) => {
    touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  image.addEventListener("touchend", (event) => {
    if (!touchStart || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showPhoto(current + (dx < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });
  image.addEventListener("touchcancel", () => { touchStart = null; });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("gallery-is-open");
    touchStart = null;
    trigger?.focus({ preventScroll: true });
  });
})();
