const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
const restOfPage = document.getElementById("main");
const languageBtn = document.getElementById("lang-toggle");
const tomato = {
  image: 'https://bioweed.com.au/wp-content/uploads/Eight-tomato-types-grown-in-australia.png';
  title: 'Brandyine Tomatoes'
}

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

function init() {
    menuToggle.addEventListener('click', hamburgerBtn);
    restOfPage.addEventListener('click', dismissList);
}

init();
