const toggleButton = document.getElementById("toggle-button-id")
const navbarLinks = document.getElementById("navbar-links-id")

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})