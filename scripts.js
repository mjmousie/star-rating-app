const allStars = document.querySelectorAll('.clickstar');
    const steps = document.querySelectorAll('.container');
    const badReview = document.querySelector('.badReview');
    const badReviewForm = document.querySelector('.badReviewForm');
    const badReviewFormEnd = document.querySelector('.badReviewFormEnd');
    const reviewButton = document.querySelector('.reviewButton');
    const reviewTab = document.querySelectorAll('.review-tab');
    const sendComment = document.querySelector('.rateButton');
    const noReview = document.querySelector('.noReview');
    let stepsNum = 0;
    let lastStepNum = 0;

allStars.forEach((star, i) => {
    star.onclick = function (){
    let current_star_level = i+1
    
    if (current_star_level > 2) {
        badReviewFormStep();
     } else {
        stepsNum++;
        updateFormSteps();
    }
    };
});

sendComment.onclick = function (){
    endReviewForm();
}

reviewButton.onclick = function (){
    stepsNum++;
    updateFormSteps();
}

noReview.onclick = function (){
    lastStepNum++;
    reviewTabActive();
}

function endReviewForm(){
    steps.forEach((formStep) =>{
        formStep.classList.contains("container-active") &&
        formStep.classList.remove("container-active");
    });
    badReviewForm.classList.remove("badReviewFormActive");
    badReviewFormEnd.classList.add("badReviewFormEndActive");
}

function updateFormSteps(){
    steps.forEach((formStep) =>{
        formStep.classList.contains("container-active") &&
        formStep.classList.remove("container-active");
    });
    steps[stepsNum].classList.add("container-active");
}

function badReviewFormStep(){
    badReviewForm.classList.add("badReviewFormActive");
}

function reviewTabActive(){
    reviewTab.forEach((tab, i) => {
    tab.onclick = function (){
    let current_tab = i;
    reviewTab.forEach((reviewTab) =>{
        reviewTab.classList.contains("review-tab-active") &&
        reviewTab.classList.remove("review-tab-active");
    });
    console.log('clicked')
    reviewTab[lastStepNum].classList.add("review-tab-active");
    };
});
}