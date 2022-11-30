window.addEventListener("DOMContentLoaded", main)

function main () {
    addEventListeners()

}

function addEventListeners() {
    const menuButton = document.getElementById('menu-btn');
    menuButton.addEventListener('click', toggleMenu) 

}


function toggleMenu() {
    const menuButton = document.getElementById('menu-btn');
    const sidebar = document.querySelector("aside");
    menuButton.classList.toggle('open');
    sidebar.classList.toggle('aside-open');
}