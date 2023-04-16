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

function reviewsSlider() {
    const reviewsSlider = document.querySelector(".reviews-cards-slider")
    const reviewsNextBtn = document.querySelector("#reviews-next-button")
    const reviewsPrevBtn = document.querySelector('#reviews-prev-button')

    const reviewsFirstCard = document.querySelectorAll(".reviews-card ")[0]
    let reviewsFirstCardWidth = reviewsFirstCard.clientWidth

    reviewsNextBtn.addEventListener('click', function(){
        reviewsSlider.scrollLeft -=  reviewsFirstCardWidth
    })

    reviewsPrevBtn.addEventListener('click', function(){
        reviewsSlider.scrollLeft +=  reviewsFirstCardWidth
    })
}



otherCasesSlider()
reviewsSlider()