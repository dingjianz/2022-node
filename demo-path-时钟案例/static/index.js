const $dom = document.querySelector(".clock");
$dom.addEventListener("mousemove", function (e) {
  e.target.style.color = "red";
});
$dom.addEventListener("mouseleave", function (e) {
  e.target.style.color = "#fff";
});

const a = 123;
