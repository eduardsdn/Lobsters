function otherCasesSliderClick() {
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

function reviewsSliderClick() {
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


function otherCasesSliderDrag(){
    const otherCasesSlider = document.querySelector(".other-cases-cards-slider")

    let isDragStart = false, prevPageX, prevScrollLeft

    const dragStart = (e) => {
        isDragStart = true
        prevPageX = e.pageX || e.touches[0].pageX
        prevScrollLeft = otherCasesSlider.scrollLeft
        console.log("mousedown")
    }

    const dragging = (e) => {
        if(!isDragStart) return
        e.preventDefault()
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
        otherCasesSlider.scrollLeft = prevScrollLeft - positionDiff
        console.log("dragging")
    }

    const dragStop = () => {
        isDragStart = false
        console.log("mouseeup")
    }

    otherCasesSlider.addEventListener('mousedown', dragStart)
    otherCasesSlider.addEventListener('touchstart', dragStart)

    otherCasesSlider.addEventListener('mousemove', dragging)
    otherCasesSlider.addEventListener('touchmove', dragging)

    otherCasesSlider.addEventListener('mouseup', dragStop)
    otherCasesSlider.addEventListener('touchend', dragStop)

}

function reviewsSliderDrag(){
    const reviewsSlider = document.querySelector(".reviews-cards-slider")

    let isDragStart = false, prevPageX, prevScrollLeft

    const dragStart = (e) => {
        isDragStart = true
        prevPageX = e.pageX || e.touches[0].pageX
        prevScrollLeft = reviewsSlider.scrollLeft
        console.log("mousedown")
    }

    const dragging = (e) => {
        if(!isDragStart) return
        e.preventDefault()
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
        reviewsSlider.scrollLeft = prevScrollLeft - positionDiff
        console.log("dragging")
    }

    const dragStop = () => {
        isDragStart = false
        console.log("mouseeup")
    }

    reviewsSlider.addEventListener('mousedown', dragStart)
    reviewsSlider.addEventListener('touchstart', dragStart)

    reviewsSlider.addEventListener('mousemove', dragging)
    reviewsSlider.addEventListener('touchmove', dragging)

    reviewsSlider.addEventListener('mouseup', dragStop)
    reviewsSlider.addEventListener('touchend', dragStop)

}

otherCasesSliderDrag()
reviewsSliderDrag()
otherCasesSliderClick()
reviewsSliderClick()