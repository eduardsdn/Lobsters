function mobileMenuPopUp(){
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuButton = document.querySelector(".header-menu-button")
    const mobileMenuClose = document.querySelector("#mobile-menu-close")
    mobileMenuButton.addEventListener('click', function(){
        mobileMenu.classList.remove("hidden")
    })

    mobileMenuClose.addEventListener('click', function(){
        mobileMenu.classList.add("hidden")
    })

}

function loginPopUp(){
    const loginPopup = document.querySelector(".login-popup")
    const loginButton = document.querySelector(".log-in-button")
    const loginClose = document.querySelector("#login-popup-close")

    loginButton.addEventListener('click', function(){
        loginPopup.classList.remove("hidden")
        loginPopup.classList.add("shown")
    })

    loginClose.addEventListener('click', function(){
        loginPopup.classList.remove("shown")
        loginPopup.classList.add("hidden")
    })
}

function registrationPopUp(){
    const registrationPopup = document.querySelector(".registration-popup")
    const registrationButton = document.querySelector(".registration-button")
    const registrationClose = document.querySelector("#registration-popup-close")

    registrationButton.addEventListener('click', function(){
        registrationPopup.classList.remove("hidden")
        registrationPopup.classList.add("shown")
    })

    registrationClose.addEventListener('click', function(){
        registrationPopup.classList.remove("shown")
        registrationPopup.classList.add("hidden")
    })
}

mobileMenuPopUp()
loginPopUp()
registrationPopUp()