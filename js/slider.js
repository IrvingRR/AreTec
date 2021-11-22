// Variables
let $slides = document.querySelectorAll('.slider-slide');
let $prevBtn = document.querySelector('.btn-left');
let $nextBtn = document.querySelector('.btn-right');
let i = 0;

// Functions
const handleSliderPrev = () => {
    $slides[i].classList.remove('active');
    i--;

    if(i < 0) {
        i = $slides.length - 1;
    }

    $slides[i].classList.add('active');
}

const handleSliderNext = () => {
    $slides[i].classList.remove('active');
    i++;

    if(i >= $slides.length) {
        i = 0;
    }

    $slides[i].classList.add('active');
}

const handleSliderAuto = () => {
    setInterval(() => {
        $slides[i].classList.remove('active');
            i++;

            if(i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add('active');
    }, 5000);
}

// Executions
document.addEventListener('click', e => {
    if(e.target === $prevBtn || e.target.matches(`.btn-left *`)) {
        e.preventDefault();
        handleSliderPrev();
    }

    if(e.target === $nextBtn || e.target.matches(`.btn-right *`)) {
        e.preventDefault();
        handleSliderNext();
    }
});

// handleSliderAuto();