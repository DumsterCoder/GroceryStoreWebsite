const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
const restOfPage = document.getElementById('main');
const languageBtn = document.getElementById('lang-toggle')


var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup();




function hamburgerBtn() {
    menuList.classList.toggle('hidden')
}

function dismissList() {
    if(menuList.classList.contains('hidden')) {
        return;
    } else {
        menuList.classList.add('hidden');
    }
}

const init = () => {
    menuToggle.addEventListener('click', hamburgerBtn);
    restOfPage.addEventListener('click', dismissList);
}

init();