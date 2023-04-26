window.addEventListener("load", () => {
  const img = document.querySelectorAll(".wrapper");

  img.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("flip");
    });
  });
});
