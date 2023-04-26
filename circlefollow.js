window.onload = function () {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animatecircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length / 1.5;

      circle.x = x;
      circle.y = y;

      const nextcircle = circles[index + 1] || circles[0];
      x += (nextcircle.x - x) * 0.3;
      y += (nextcircle.y - y) * 0.3;
    });

    requestAnimationFrame(animatecircles);
  }

  animatecircles();
};
