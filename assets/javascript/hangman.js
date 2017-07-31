
var animals=["LION","TIGER","ELEPHANT","DEER","BEAR","TIGER","WOLF"];
var guesses = 12; 
var gameOver=false;
var guessesSoFar = [];
var computerGuess=animals[Math.floor(Math.random() * animals.length)];
	  console.log(computerGuess);
var computerGuess_word = computerGuess.split([]);
    console.log(computerGuess_word)
var length = computerGuess_word.length;
    console.log(length) ;
var empty_word=[length];
    console.log(empty_word);

window.onload = function() {
      for (var i = 0; i < length; i++) 
          {
           empty_word[i] = "_";      
          }
      document.querySelector("#userText").innerHTML = empty_word;
          console.log(empty_word)
} ; //onload ends


document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
        console.log(userGuess)
      userGuess = userGuess.toUpperCase();
      guessesSoFar.push(userGuess);
        console.log(guessesSoFar)
      
      if((guesses - guessesSoFar.length)<=0)
      	{
      		over =
            "<p><img src='assets/images/gameover.jpg' width='530' height='340' ></p>" ;
      		 document.querySelector("#total").innerHTML=over;
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

      		var win = true;
      		    for(var j=0;j<empty_word.length;j++)
              {      			
                if(empty_word[j]==='_')
                {
               	  win = false;
                }               
      		    }


      		  if(win)
      		   {
                winner = "<p><img src='assets/images/win1.png' width='500' height='120'></p>";
      			    document.querySelector("#guessesMade").innerHTML=winner;
      		   }
      }; //event function ends 	
      

      
      

 