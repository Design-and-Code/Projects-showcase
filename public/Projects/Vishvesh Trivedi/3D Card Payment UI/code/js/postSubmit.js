const submitBtn = document.querySelector('.payment-btn');
const paymentForm = document.querySelector('form');
const successBox = document.querySelector('.success-container');
const confettiContainer = document.querySelector('.confetti-wrapper');
const okayBtn = document.querySelector('.okay-btn');


const animItem = bodymovin.loadAnimation({
    wrapper: confettiContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_rovf9gzu.json'
})

submitBtn.addEventListener('click', ()=>{
    successBox.style.transform = "scale(1)";
    setTimeout(()=>{
        animItem.goToAndPlay(0, true);
    }, 300)
})

okayBtn.addEventListener('click', ()=>{
    successBox.style.transform = "scale(0)";
    setTimeout(()=>{
        location.reload()
    }, 500)
})
