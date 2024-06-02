const toggle = document.getElementById("toggle-btn");
const content = document.getElementById("content");

toggle.addEventListener("click", () => {
  content.classList.toggle("active");
});
