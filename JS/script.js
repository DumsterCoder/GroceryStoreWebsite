const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');
const restOfPage = document.getElementById('main');


function hamburgerBtn() {
    if(menuList.classList.contains('hidden')) {
        menuList.classList.remove('hidden');
    } else {
        menuList.classList.add('hidden');
    }
}

function dismissList() {
    if(menuList.classList.contains('hidden')) {
        return;
    } else {
        menuList.classList.add('hidden');
    }
}



menuToggle.addEventListener('click', hamburgerBtn);
restOfPage.addEventListener('click', dismissList);