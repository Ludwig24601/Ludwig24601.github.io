(() => {
  const imgs = Array.from(document.querySelectorAll(".photo-item img"));
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const closeBtn = document.getElementById("lb-close");
  const prevBtn = document.getElementById("lb-prev");
  const nextBtn = document.getElementById("lb-next");
  let current = 0;

  function show(index) {
    if (!imgs.length) return;
    current = (index + imgs.length) % imgs.length;
    lbImg.src = imgs[current].src;
  }

  imgs.forEach((img, idx) => {
    img.addEventListener("click", () => {
      show(idx);
      lightbox.showModal();
    });
  });

  closeBtn.addEventListener("click", () => lightbox.close());
  prevBtn.addEventListener("click", () => show(current - 1));
  nextBtn.addEventListener("click", () => show(current + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.open) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });
})();