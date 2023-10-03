var playing = false;
var score;
var gamesLeft
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
     //if we are playing
    if(playing ==true){
        
        location.reload(); //reload page
        
    }else{////if we are not playing
        
        //change mode to playing
        playing = true;    
        
        //set score to 0
        score = 0;
        
document.getElementById("scorevalue").innerHTML = score;
        
        //set game left to 0
        gamesLeft = 4;
        document.getElementById("gamesleft").innerHTML = gamesLeft;
        
   //show countdown box     
   show("timeremaining");
    timeremaining = 30;

document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        hide("gameOver");
        
        //change button to reset
        
document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        startCountdown();
        
        //generate a new Q&A
        generateQA();
    }
}
    

 //if we click on answer box
    //if we are playing
        //correct?
            //yes
                //Increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
               //Show try again box for 1sec

//functions


function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
     if(timeremaining == 0){ 
        restartTimer();
         gamesLeft -= 1;
document.getElementById("gamesleft").innerHTML = gamesLeft;
        
         gameOver();
         
    }       
    }, 1000);
}


//stop counter
function stopCountdown(){
    clearInterval(action);
}


//hide elements
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show elements
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//game over function
function gameOver(){ 
    
     if(gamesLeft == 0){
         show("gameOver");
document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            show("timeremaining");
            hide("correct");
            hide("wrong");
            hide("turns");
            hide("score");
            location.reload();
            
             
            
//document.getElementById("startreset").innerHTML = "Start Game";
           
     }
         
     }
   

 
        
//generate question and multiple answers

function generateQA(){
  var x = 1+ Math.round(9*Math.random());
  var y = 1+ Math.round(9*Math.random());
  correctAnswer = x*y;
    
document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1+ Math.round(3*Math.random());

document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
//fill other boxes with wrong answer and make sure the same wrong answers don't repeat in the boxes
var answers = [correctAnswer];
    
for(i=1; i<5; i++){
    if(i != correctPosition){
        var wrongAnswer; 
        do{
           wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer 
        }while(answers.indexOf(wrongAnswer)>-1);
        
document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
    }
}
}

function restartTimer(){
    timeremaining = 30;

document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        startCountdown();
}
//If we click on the answer boxes

for(i=1; i<5; i++){
    document.getElementById("box" + i).onclick = function(){
    //check if we are playing
    if(playing == true){//if yes check it's the correct answer
        if(this.innerHTML == correctAnswer){
            //if that is the answer increase score by 1
            score++;
document.getElementById("scorevalue").innerHTML = score;
            
        //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                       hide("correct");
            }, 1000);
            
            //Generate new Q&A
            generateQA();
            restartTimer();
                      
        }else{
            //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                       hide("wrong");
            }, 1000);
           gamesLeft -= 1;
 document.getElementById("gamesleft").innerHTML = gamesLeft;
         
         generateQA();
         restartTimer();
         gameOver();
        }
         
         
    }
}
}
