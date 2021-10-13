
var plscore = 0;
var coscore = 0;
var visited = 0;

// ---------------------------------Batting Area -----------------------------------------------------

//Number fetching
const goBat0 = () =>{
    window.a = document.getElementById("pnumbt0").value;
    batSound();
    goBat();
}

const goBat1 = () =>{
    window.a = document.getElementById("pnumbt1").value;
    batSound();
    goBat();
}

const goBat2 = () =>{
    window.a = document.getElementById("pnumbt2").value;
    batSound();
    goBat();
}

const goBat3 = () =>{
    window.a = document.getElementById("pnumbt3").value;
    batSound();
    goBat();
}

const goBat4 = () =>{
    window.a = document.getElementById("pnumbt4").value;
    batSound();
    goBat();
}

const goBat5 = () =>{
    window.a = document.getElementById("pnumbt5").value;
    batSound();
    goBat();
}

const goBat6 = () =>{
    window.a = document.getElementById("pnumbt6").value;
    batSound();
    goBat();
}



//Batting function
const goBat = () =>{

        //Generating random number
        var compbt = Math.floor(Math.random() * 7);
        document.getElementById("compgensc").innerHTML= "Computer Generated Number =" + compbt;

        //Checking for same number throw
        if(a == compbt){

            goHow();
            
            
            
            //console.log(plscore);

            //Displaying score on navbar
            document.getElementById("navpscore").innerHTML="Player Score = " + plscore;

            
            
            //Removing batting column
            document.getElementById("batting").remove();
            

            document.getElementById("out").click();
            
        

            // Final winning function
            finalWin();

             // Adding count in order to check player is played
            visited = 1;
            document.getElementById("bowling").setAttribute("style", "visibility:visible;");
        }

        //If both dont have same throw
        else{

            //For compensate zero
            if(parseInt(a)===0){
                a = compbt;
            }

            // Adding the score
            plscore = plscore + parseInt(a);

            //Displaying score on navbar
            document.getElementById("navpscore").innerHTML="Player Score = " + plscore;

            //Checking if player have crossed the already computer played one
            if(visited !== 0){
                if(plscore > coscore){
                    goTune();
                    document.getElementById("modalbodyp").innerHTML=" <p style='background-color:black; color:white;'> You Won the Match!</p> <br>  <p style='font-size:25px;'> Your score = " + plscore + "<br> Computer score = " + coscore + "</p>";
                    document.getElementById("Modalp").click();
                    document.getElementById("batting").remove();
                }
            }
        }
        
}


// ------------------------------------------- Bowling Area -----------------------------------------------------

//Number fetching
const goBowl0 = () => {
    window.b = document.getElementById("pnumbt0").value;
    batSound();
    goBowl();
}

const goBowl1= () => {
    window.b = document.getElementById("pnumbl1").value;
    batSound();
    goBowl();
}

const goBowl2 = () => {
    window.b = document.getElementById("pnumbl2").value;
    batSound();
    goBowl();
}

const goBowl3 = () => {
    window.b = document.getElementById("pnumbl3").value;
    batSound();
    goBowl();
}

const goBowl4 = () =>{
    window.b = document.getElementById("pnumbl4").value;
    batSound();
    goBowl();
}

const goBowl5 = () =>{
    window.b = document.getElementById("pnumbl5").value;
    batSound();
    goBowl();
}

const goBowl6 = () =>{
    window.b = document.getElementById("pnumbl6").value;
    batSound();
    goBowl();
}


//Bowling section
const goBowl = () =>{

        //Generating random number
        var compbl = Math.floor(Math.random() * 7);
        document.getElementById("compgensc").innerHTML= "Computer Generated Number =" + compbl;

        //Checking for same number throw
        if(b == compbl){
            goHow();
            
            
            //console.log(coscore);

            //Displaying score on navbar
            document.getElementById("navcscore").innerHTML="Computer Score = " + coscore;

             //Removing bowling column
            document.getElementById("bowling").remove();

            document.getElementById("out").click();
            


            // Final winning function
            finalWin();

             // Adding count in order to check player is played
            visited = 1;
            document.getElementById("batting").setAttribute("style", "visibility:visible;");
        }

         //If both dont have same throw
        else{

            //For compensate zero
            if(compbl===0){
                compbl = parseInt(b);
            }


             // Adding the score
            coscore = coscore + compbl;

            //Displaying score on navbar
            document.getElementById("navcscore").innerHTML="Computer Score = " + coscore;

            //Checking if computer have crossed the already player's played one
            if(visited !== 0){
                if(coscore > plscore){
                    goTune1();
                    document.getElementById("modalbodyc").innerHTML=" <p style='background-color:black;color:white;'>Computer Won the Match!</p><br> <p style='font-size:25px;'> Computer score = " + coscore + "<br> Your score = " + plscore + "</p>";
                    document.getElementById("Modalc").click();
                    document.getElementById("bowling").remove();
                }
            }

        }
        
}


// Final winning function
const finalWin = () =>{
    
    // Checking if both the player have visited
    if(visited !== 0){
        //Checking player is greater or not
        if(plscore > coscore){
            goTune();
            document.getElementById("modalbodyp").innerHTML=" <p style='background-color:black; color:white;'>You Won the Match!</p> <br> <p style='font-size:25px;'> Your score = " + plscore + "<br> Computer score = " + coscore + "</p>";
            document.getElementById("Modalp").click();
            document.getElementById("batting").remove();
            
            
        }
        
        else{
            
            // Checking computer is greater or not
            if(coscore > plscore){
                goTune1();
                document.getElementById("modalbodyc").innerHTML=" <p style='background-color:black;color:white;'>Computer Won the Match!</p><br> <p style='font-size:25px;'>Computer score = " + coscore + "<br> Your score = " + plscore + "</p>";
                document.getElementById("Modalc").click();
                document.getElementById("bowling").remove();
                
            }
            
            // Checking for tie
            else{
                
                goTune1();
                document.getElementById("Modalt").click();
                
            }
        }
    }

}



//Bat sound
const batSound = () =>{
    var batso = new Audio();
    batso.src="assets/Sounds/bat.mp3";
    batso.play();
}

//toss sounds
const goToss = () => {
    var too = new Audio();
    too.src="assets/Sounds/toss.mp3";
    too.play();

}

//howzat sound
const goHow = () =>{
    var howzat = new Audio();
    howzat.src="assets/Sounds/how.mp3"
    howzat.play();
    
}

//Final tune
const goTune = () => {
    var tune = new Audio();
    tune.src="assets/Sounds/celebration.mp3"
    tune.play();
    tune.loop = true;
    
}

const goTune1 = () => {
    var tune1 = new Audio();
    tune1.src="assets/Sounds/celebration.mp3"
    tune1.play();
    tune1.loop = true;
    
    
}

// Clearing toss section
const goClearbt = () =>{
    goToss();
    document.getElementById("toss").remove();
    document.getElementById("bowling").setAttribute("style", "visibility:hidden;");
}

const goClearbl = () =>{
    goToss();
    document.getElementById("toss").remove();
    document.getElementById("batting").setAttribute("style", "visibility:hidden;");
}