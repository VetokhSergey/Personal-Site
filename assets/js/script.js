const navBar = document.querySelector('.header_nav');
const photomodal = document.querySelector('.hidden_block');
const imgTrigger = document.querySelector('.trigger');
const modalBackground = document.querySelector('.img_background');
const closeBtn = document.querySelector('.close_btn');


window.addEventListener('scroll', (e) => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        navBar.classList.add('bar');
    } else {
        navBar.classList.remove('bar');
    }
});

imgTrigger.addEventListener('click', () => {
    photomodal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

modalBackground.addEventListener('click', () => {
    photomodal.style.display = 'none';
    document.body.style.overflow = 'visible';
});

closeBtn.addEventListener('click', () => {
    photomodal.style.display = 'none';
    document.body.style.overflow = 'visible';
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}