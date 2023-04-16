function otherCasesSlider() {
    const otherCasesSlider = document.querySelector(".other-cases-cards-slider")
    const otherCasesNextBtn = document.querySelector("#other-cases-next-button")
    const otherCasesPrevBtn = document.querySelector('#other-cases-prev-button')

    const otherCasesFirstCard = document.querySelectorAll(".other-cases-card")[0]
    let otherCasesFirstCardWidth = otherCasesFirstCard.clientWidth

    otherCasesNextBtn.addEventListener('click', function(){
        otherCasesSlider.scrollLeft -=  otherCasesFirstCardWidth
    })

    otherCasesPrevBtn.addEventListener('click', function(){
        otherCasesSlider.scrollLeft +=  otherCasesFirstCardWidth
    })

}

otherCasesSlider()