const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
const restOfPage = document.getElementById("main");
const languageBtn = document.getElementById("lang-toggle");

function hamburgerBtn() {
  menuList.classList.toggle("hidden");
}

function dismissList() {
  if (menuList.classList.contains("hidden")) {
    return;
  } else {
    menuList.classList.add("hidden");
  }
}

var map = L.map("map").setView([40.798603, -81.695959], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([40.798603, -81.695959]).addTo(map);

marker.bindPopup("EL DESEO");

function init() {
    menuToggle.addEventListener('click', hamburgerBtn);
    restOfPage.addEventListener('click', dismissList);
}

init();
