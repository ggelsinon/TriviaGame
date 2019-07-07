$(document).ready(function () {
    $("#submit-div").hide();

  var quiz = $("#container-quiz");
  var timer  ;


    var questionsObj = [{
        question: "How many No. 1 songs did Johnny Cash have?",
        answerList: ["0 ", "5 ", "13 "],
        answer: "5 "
    }, {
        question: "Johnny Cash married June Carter in what year?",
        answerList: ["1968 ", "1973 ", "1977 "],
        answer: "1977 "
    }, {
        question: "Johnny Cash had his own television show on ABC in which years?",
        answerList: ["1965-1970 ", "1969-1971 ", "1973-1977 "],
        answer: "1965-1970 "
    }, {
        question: "What is the first No. 1 song recorded by Johnny Cash?",
        answerList: ["I Walk the Line ", "Ring of Fire ", "Folsom Prison Blues "],
        answer: "I Walk the Line "
    }, {
        question: "The song “A Boy Named Sue” reached No. 1 in 1969. What Grammy did Johnny Cash receive for it?",
        answerList: ["Best Gospel Performance/Song ","Song of the Year ","Best country vocal performance, male "],
        answer: "Best country vocal performance, male "
    },  {
        question: "How old was Johnny Cash when he died?",
        answerList: ["71 ", "80 ", "78 "],
        answer: "71 "
    },  {
        question: "What song recorded by Johnny Cash received the CMA award for single of the year in 2003?",
        answerList: ["The Man Comes Around ", "Streets of Laredo ", "Hurt"],
        answer: "Hurt "
    },   {
        question: "What is the title of Johnny Cash’s last No. 1 single on Billboard’s country chart?",
        answerList: ["One Piece at a Time ", "Gone Girl ", 	"Highway Patrolman "],
        answer: "One Piece at a Time "
    }, {
        question: "Johnny Cash appeared in how many episodes of the television show Hee Haw?",
        answerList: ["One ", "Ten ", "Four "],
        answer: "Four "
    }, {
        question: "Johnny Cash and his wife June Carter Cash won a Grammy for best country vocal performance by a duo or group in 1970 for what song?",
        answerList: ["If I Were a Carpenter ", "My Grandfather's Clock ", 	"Mississippi Sand " ],
        answer: "If I Were a Carpenter "
    }];


var gameObj = {
    correct: 0,
    incorrect: 0,
    counter: 16,

    timeLeft: function(){
        gameObj.counter--;
        $("#timeLeft").html(gameObj.counter + " seconds");
        if(gameObj.counter <= 1){
            console.log("time is up");
            gameObj.done();
        }
        
    },
    startGame: function(){
        timer=setInterval(gameObj.timeLeft,1000);
        $("#container-quiz").prepend("<h2>Time Left: </h2>");
        $("#start").hide();
        $("#submit-div").show();
        for(var i =0; i<questionsObj.length; i++){
            quiz.append("<h3>" + questionsObj[i].question + "</h3>")
            for(var j=0; j<questionsObj[i].answerList.length; j++){
                quiz.append("<input type='radio' name='question-" + i + "' value='" + questionsObj[i].answerList[j] + "''>" + questionsObj[i].answerList[j]);
            }
        }

    },
    done: function(){
        $("#timeLeft").remove();
        $("#submit-div").hide();
        var inputs = quiz.children("input:checked");
        for(var i = 0; i <inputs.length; i++){
            if($(inputs[i]).val()===questionsObj[i].answer){
                gameObj.correct++
            } else{
                gameObj.incorrect++
            }
        }
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#container-quiz h2").remove();
        quiz.html("<h2>Your Results:</h2>");
        quiz.append("<h2>Correct Answers: " + this.correct + "</h2>");
        quiz.append("<h2>Incorrect Answers: " + this.incorrect + "</h2>");
    }

}

$(document).on("click", "#start", function() {
    gameObj.startGame();
  });
  
$(document).on("click", "#submit", function() {
    gameObj.done();
  });




})
