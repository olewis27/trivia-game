var panel = $('#quiz-area'); // Panel we will write and append all of the HTML to from this JS file
var countStartNumber = 30; // Global variable,

// This function handles events where one button is clicked
// Start On Click
$("#start").click(function() {
	console.log("Start Game");
    game.start();
})

// Submit On Click
$(document).on('click', '.check-guess', function(e) {
	game.clicked(e);
})
// Start Over On Click
$(document).on('click', '#start-over', function() {
   location.reload()
});


$(document).on('click', '#submit', function() {
    game.done()
});

// questionNumber = 0;

//start on click
//submit on click
// game.checkGuess()

var randomQuestion = Math.floor(Math.random()*(questionsArray));


var questionsArray = [{
	question: "Two former or current NFL players are tied for most fumbles in a season at 23. Daunte Culpepper is one. Who is the other?",
	choices: ["Michael Vick", "Kerry Collins", "Warren Moon", "David Carr"],
	correctChoice: "Kerry Collins"
	}, {	
		question: "Which NFL player accumulated the most points in a single season?",
		choices: ["Shaun Alexander", "Paul Hornung", "Ladian Tomlinson", "Stephen Gostkowski"],
		correctChoice: "Shaun Alexander"
	}, {
		question: "Which city do the Jaguars play in? [NFL]",
		choices: ["Tampa Bay", "Arizona", "Minnesota", "Jacksonville"],
		correctChoice: "Jacksonville"
	}, {
		question: "Which NFL team has won the most Super Bowls?",
		choices: ["Cowboys", "49ers", "Steelers", "Patriots"],
		correctChoice: "Patriots"
	}, {	
		question: "Lambeau Field is home to which NFL team?",
		choices: ["Green Bay Packers", "San Diego Chargers", "Washington Redskins", "New Orleans Saints"],
		correctChoice: "Green Bay Packers"
	}, {
		question: "How long is an NFL regulation field? (not including end zones)",
		choices: ["100 yards", "80 yards", "120 yards", "110 yards"],
		correctChoice: "100 yards"
	}, {
		question: "Who has the record for the most rushing yards in an NFL regular season?",
		choices: ["Adrian Peterson", "Emmitt Smith", "Barry Sanders", "OJ Simpson"],
		correctChoice: "OJ Simpson"
	}, {
		question: "Which player has led the NFL in rushing yards for the most seasons?",
		choices: ["Jim Brown", "Emmitt Smith", "Eric Dickerson", "OJ Simpson"],
		correctChoice: "Emmitt Smith"
	}]




var game = {
  correct:0,
  incorrect:0,
  counter:120,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time:<span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();
 

   //for each question you will loop and add buttons and display each choice with jquery
  for(var i=0; i < questionsArray.length; i++) {
    	$('#quiz-area').append('<h2>' + questionsArray[i].question + '</h2>');
    for(var j=0; j < questionsArray[i].choices.length; j++) {
    	$('#quiz-area').append('<input type="radio" name="answer'+i+'" value="'+questionsArray[i].choices[j]+'"> ' + questionsArray[i].choices[j] );
    }
  }
  	
  },


  done: function() {
  	$.each($("input[name='answer0']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[0].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  	$.each($("input[name='answer1']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[1].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  	  	$.each($("input[name='answer2']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[2].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  	  	$.each($("input[name='answer3']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[3].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  	  	$.each($("input[name='answer4']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[4].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  		$.each($("input[name='answer5']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[5].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  	  	$.each($("input[name='answer6']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[6].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});
  	  	$.each($("input[name='answer7']:checked"), function () {
  		console.log("inside")
  		if($(this).val() == questionsArray[7].correctChoice) {
  			game.correct++;
  		} else {
  		game.incorrect++;
  		}
  	});

  	game.result();
  },

    result: function() {

    clearInterval(timer);
     $("#quiz-area").empty();
   	$("#quiz-area").append("Correct Answers: "+ game.correct + "<br />");
   	$("#quiz-area").append("Incorrect Answers: "+ game.incorrect);
  }



  }

