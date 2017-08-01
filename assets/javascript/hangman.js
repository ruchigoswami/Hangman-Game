
var animals=["LION","TIGER","ELEPHANT","DEER","BEAR","TIGER","WOLF"];
var guesses = 12; 
var winCount=0; 
var loseCount=0;
var guessesSoFar = [];
var computerGuess;
var computerGuess_word ;
var length  ;
var empty_word;
var gameResult; 


function reset(){
 guessesSoFar = [];
 computerGuess=animals[Math.floor(Math.random() * animals.length)];
    console.log(computerGuess);
 computerGuess_word = computerGuess.split([]);
    console.log(computerGuess_word)
 length = computerGuess_word.length;
    console.log(length) ;
 empty_word=[length];
    console.log(empty_word);
 gameResult= false; 
 for (var i = 0; i < length; i++) 
    {
      empty_word[i] = "_";      
    }
document.querySelector("#userText").innerHTML = empty_word;
document.querySelector("#guessesLeft").innerHTML = guesses;
var html="<p><span >Your gusses so far: </span><span style='color:white'>"+ guessesSoFar+"</span></p>";
document.querySelector("#guessesMade").innerHTML = html;
}   

window.onload = function() {
  reset();
  document.querySelector("#wins").innerHTML="Wins:" + winCount;
     
} ; //onload ends

function process(event){
        // Determines which key was pressed.
      var userGuess = event.key;
        console.log(userGuess)
      userGuess = userGuess.toUpperCase();
      if(!guessesSoFar.includes(userGuess)){
        guessesSoFar.push(userGuess);
      }
      
        console.log(guessesSoFar)
      
      if((guesses - guessesSoFar.length)<=0)
        {
          loseCount++;
          gameResult=false;
          reset();

        }
        else
        {
            
            for(var i=0;i<length;i++)
              {
               if(userGuess===computerGuess_word[i])
                {
                 console.log(empty_word)
                 empty_word[i]=userGuess;
                 console.log(empty_word)            
                }   
              }

        var html="<p><span >Your gusses so far: </span><span style='color:white'>"+ guessesSoFar+"</span></p>";
        document.querySelector("#guessesMade").innerHTML = html;
        document.querySelector("#guessesLeft").innerHTML = guesses - guessesSoFar.length;
        document.querySelector("#userText").innerHTML = empty_word;

        }// else ends

           gameResult = !empty_word.includes("_");
           if(gameResult)
             {
                winCount++;
               document.querySelector("#wins").innerHTML="Wins" + winCount;
             }
             console.log("empty_word"+empty_word);
             console.log("Win: win count "+gameResult + winCount );
             if(gameResult){
              //Reset
              reset();

             }

}


document.onkeyup = function(event) {
      if (event.keyCode < 65 || event.keyCode > 90) { 
              document.getElementById("your-guess").innerHTML = "Please enter a key between A to Z!"
          } else {
              process(event);
          }
    

      }; //event function ends 	
      

      
      

 