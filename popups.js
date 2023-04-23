function mobileMenuPopUp(){
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuButton = document.querySelector(".header-menu-button")
    const mobileMenuClose = document.querySelector(".close")
    mobileMenuButton.addEventListener('click', function(){
        mobileMenu.classList.remove("hidden")
        mobileMenu.classList.add("shown")
    })

    mobileMenuClose.addEventListener('click', function(){
        mobileMenu.classList.remove("shown")
        mobileMenu.classList.add("hidden")
    })

}

mobileMenuPopUp()