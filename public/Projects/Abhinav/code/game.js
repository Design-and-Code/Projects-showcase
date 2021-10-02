let inputDir= {x:0 , y:0};
let speed = 6;
let lastPaintTime = 0;
let snakeArr = [
    {x:13 , y:15}
]
let score=0;
let highScore = 0;
let food = {x:11 , y:13};

let board = document.getElementById('board');
let showScore = document.getElementById('score');
let showHighScore = document.getElementById('highscore');
let specialfood = {}

// Game Functions
function main(ctime){
  window.requestAnimationFrame(main);
  if((ctime - lastPaintTime)/1000 < 1/speed){
      return;
  }
   lastPaintTime = ctime ;
   gameEngine();
}

function isCollide(sarr){
    
    for(i=1;i<sarr.length;i++){
        if(sarr[i].x===sarr[0].x && sarr[i].y === sarr[0].y)
        return true;
    }

    if(sarr[0].x>=18 || sarr[0].x<=0 ||sarr[0].y>=18 || sarr[0].y<=0)
    return true;

    return false;
}


function gameEngine(){
  // Part 1 : Updating the snake array and food

  if(isCollide(snakeArr)){
      inputDir = {x:0 , y:0};
      alert(`GamerOver \nYour score is : ${score}`);
      snakeArr = [ {x:13, y:15}];
      food = {x:11 , y:13};
      if(highScore<score){
      highScore = score;
      showHighScore.innerText = `Highscore: ${highScore}`;
      }
      score = 0;
      showScore.innerText= `Score: ${score}`;
  }

 //If you have eaten the food , increment the food and regenerate the food

 if(snakeArr[0].y === food.y && snakeArr[0].x === food.x ){
     snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
     let a = 2;
     let b = 16;
     
     score++;
     food = {x: Math.round(a + (b-a)*Math.random()), y:Math.round(a + (b-a)*Math.random())};

     showScore.innerText= `Score: ${score}`;
 }

 //Moving the snake
 for(let i =snakeArr.length-2 ; i>=0 ;i--){
     snakeArr[i+1]= {...snakeArr[i]};
 }
 
 snakeArr[0].x +=inputDir.x;
 snakeArr[0].y +=inputDir.y;

  // Part 2 : Display the snake and  food
  //Display snake

  board.innerHTML = "";
  snakeArr.forEach( (e,index)=>{

     let  snakeElement = document.createElement('div');
      snakeElement.style.gridRowStart = e.y;
      snakeElement.style.gridColumnStart = e.x;
      
      
      if(index===0)
      snakeElement.classList.add('head');
      else
      snakeElement.classList.add('snake');

      board.appendChild(snakeElement);
  });

  //Display food
  let  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  board.appendChild(foodElement);

}



//Main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown' , e => {
    // inputDir = {x:0 , y:1}//Start the game
    switch(e.key){
        case "a":
            inputDir.x= -1;
            inputDir.y= 0;
            break;
        case "w":
            inputDir.x= 0;
            inputDir.y= -1;
            break;
        case "s":
            inputDir.x= 0;
            inputDir.y= 1;
            break;
        case "d":
            inputDir.x= 1;
            inputDir.y= 0;
            break;
    }
})