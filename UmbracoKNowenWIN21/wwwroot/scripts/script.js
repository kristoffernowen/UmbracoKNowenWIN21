

if (document.body.clientHeight < window.innerHeight) {
    document.querySelector('.footer').style.position = 'fixed'
}

/*

let pagePosition = window.screenY

const navbar = document.getElementById("myNavbar")
const whiteOnScroll = () => navbar.classList.add("bg-white")
const greyOnTop = () => navbar.classList.remove("bg-white")

window.addEventListener('scroll', () => {
    pagePosition = window.scrollY

    if (pagePosition >= 1) {
        whiteOnScroll
    }
    else {
        greyOnTop
    }
})

    works in vs code but something is wrong here

*/