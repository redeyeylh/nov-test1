const controlNav = document.querySelector('#controlNav') ;
const sideBar = document.querySelector('#sideBar') ;

controlNav.onclick = () => {
    sideBar.classList.toggle('translate-x-full' ) ;
} ;
