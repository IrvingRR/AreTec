// Variables
let $menu = document.getElementById('navbar-elements');
let $toggleMenu = document.getElementById('navbar-toggle');
let $navbar = document.getElementById('navbar');
let activatorMenu = true;
let navbarHeight = navbar.offsetTop;

// Functions
const handleClickMenu = () => {
    if (activatorMenu) {
        $menu.classList.add('active');
        $toggleMenu.querySelector('i').classList.remove('fa-bars');
        $toggleMenu.querySelector('i').classList.add('fa-times');

        activatorMenu = false;
    }else {
        activatorMenu = false;

        $menu.classList.remove('active');
        $toggleMenu.querySelector('i').classList.remove('fa-times');
        $toggleMenu.querySelector('i').classList.add('fa-bars');

        activatorMenu = true;
    }
}

const handleScrollMenu = () => {
    if (window.pageYOffset >= navbarHeight) {
        $navbar.classList.add('scroll-active');
    } else {
        $navbar.classList.remove('scroll-active');
    }
}

// Executions
$toggleMenu.addEventListener('click', handleClickMenu);
window.addEventListener('scroll', handleScrollMenu);