const crosshair = document.querySelector('.cursor')
const target = document.querySelector('.target')
const scoreText = document.querySelector('.score')
const timerText = document.querySelector('.timer')
const highscoreText = document.querySelector('.highscore')
const playbutton = document.querySelector('.landing .playbtn')
const damage = document.querySelector('.damage')
const ouch =   document.querySelector('.ouch')
const welcomeSound = document.querySelector('.welcome')
const gameoverSound = document.querySelector('.gameover')

var score = 0;
var timeLeft = 40;
var highscore = 0;

welcomeSound.currentTime= 0;
welcomeSound.play();

//document.querySelector('.landing').addEventListener('click', (e) => e.stopPropagation())

const play = () => {
    setInterval(() => {
        timer();
    },1000);
}



window.onload = () => {
    if(localStorage.getItem('highscore')){
        highscore = localStorage.getItem('highscore')
        highscoreText.innerHTML = `Highscore : ${highscore}`
    }
    scoreText.innerHTML = score;
    timerText.innerHTML = `${timeLeft} s Left`;
    respawn()
    //play()
}

playbutton.addEventListener('click', () => {
    document.querySelector('.landing').style.opacity = "0";
    setTimeout(() => {
        document.querySelector('.landing').style.display = "none";
    },100)
    play();
})


document.addEventListener('mousemove', (e) => {
    crosshair.style.left = `${e.clientX}px`
    crosshair.style.top = `${e.clientY}px`
})

const respawn = () => {
    const top = Math.floor(Math.random() * (window.innerHeight-120))
    const left = Math.floor(Math.random() * (window.innerWidth-120))
    target.style.top = `${top}px`
    target.style.left = `${left}px`
}

const gameOver = () => {
    alert(`GameOver \n You Scored = ${score}`)
    if(localStorage.getItem('highscore') < score) {
        localStorage.setItem('highscore', score)
        highscore = score;
        highscoreText.innerHTML= `Highscore : ${highscore}`
    }
    window.location.reload();
    // score = 0; 
    // timeLeft = 41;
    // scoreText.innerHTML = score;
    // timerText.innerHTML = timeLeft;
}
const timer = () => {
    if(timeLeft === 0) {
        gameoverSound.currentTime = 0;
        gameoverSound.play();
       gameOver();
    }
    timeLeft -=1;
    timerText.innerHTML = `${timeLeft} s Left`;
}

// document.addEventListener('click', () => {
//     damage.currentTime = 0;
//     damage.play()
// })
target.addEventListener('click', (e) => {
    e.stopPropagation(); 
    ouch.currentTime = 0;
    ouch.play()
    score +=1;
    scoreText.innerHTML = score;
    respawn();
} )