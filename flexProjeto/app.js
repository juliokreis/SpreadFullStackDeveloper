const btnMobile = document.getElementById('btnMobile')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const header = document.getElementById('header')
    header.classList.toggle('active')
    const active = header.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)