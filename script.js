const burger = document.getElementById("burger");
const dropdown = document.getElementById("dropdown");
burger.onclick = () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("active");
};

dropdown.onclick = () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("active");
};
