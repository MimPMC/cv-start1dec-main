window.addEventListener("DOMContentLoaded", main)

function main () {
    addEventListeners()

}

function addEventListeners() {
    const menuButton = document.getElementById('menu-btn');
    menuButton.addEventListener('click', toggleMenu)
    
    const contactButton = document.querySelector('.contact-btn')
    contactButton.addEventListener('click', showContactInformation)

}


function toggleMenu() {
    const menuButton = document.getElementById('menu-btn');
    const sidebar = document.querySelector("aside");
    menuButton.classList.toggle('open');
    sidebar.classList.toggle('aside-open');
}

function showContactInformation() {
    console.log("hello")
    const aboutMeText = document.querySelector('.info-about-me-p')
    aboutMeText.innerHTML = ""

    let contactImage = document.createElement("img")
    contactImage.src = "./images/contact.png"
    contactImage.className = "contact-img"
    aboutMeText.appendChild(contactImage);

}