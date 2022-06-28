const THUMBNAIL = document.querySelectorAll('.thumbnail img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMG = document.querySelector('.popup__img');
const ARROW_LEFT  = document.querySelector('.popup__arow--left');
const ARROW_RIGHT = document.querySelector('.popup__arow--right');

let currentIndex;
const showNextSlider = () => {
    currentIndex === THUMBNAIL.length - 1 ? currentIndex = -1: '';
    POPUP_IMG.src = THUMBNAIL[++currentIndex].src;
}

const showPreviousSlider = () => {
    currentIndex < 1 ? currentIndex = THUMBNAIL.length: '';
    POPUP_IMG.src = THUMBNAIL[--currentIndex].src;
}

const exitSlider = () => {
    POPUP.classList.add('hidden');
}

THUMBNAIL.forEach( (e, index) => {
    
    e.addEventListener('click', () => {
        POPUP.classList.remove('hidden');
        POPUP_IMG.src = e.src;
        currentIndex = index;
    })
})

POPUP_CLOSE.addEventListener('click', exitSlider) 

ARROW_LEFT.addEventListener('click', showPreviousSlider);
ARROW_RIGHT.addEventListener('click', showNextSlider) ;



document.addEventListener("keydown", e => {
    if(!POPUP.classList.contains('hidden')) 
    {
        e.code === 'ArrowRight' ? showNextSlider() : '';
        e.code === 'ArrowLeft'  ? showPreviousSlider() : '';
        e.code === "Escape"     ? exitSlider() : '';
    }
})

POPUP.addEventListener('click', e => {
    e.target === POPUP ? exitSlider(): '';
    console.log(e.target)
}) 
