$(document).ready(function () {

  var quiz = $("#container-quiz");
  var timer  ;


    var questionsObj = [{
        question: "How many No. 1 songs did Johnny Cash have?",
        answerList: ["0", "5", "13"],
        answer: "5"
    }, {
        question: "Johnny Cash married June Carter in what year?",
        answerList: ["1968", "1973", "1977"],
        answer: "1977"
    }, {
        question: "Johnny Cash had his own television show on ABC in which years?",
        answerList: ["1965-1970", "1969-1971", "1973-1977"],
        answer: "1965-1970"
    }, {

    }];

var gameObj = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    timeLeft: function(){
        gameObj.counter--;
        $("#timeLeft").html(gameObj.counter);
        if(gameObj.counter===0){
            console,log("time is up");
            gameObj.done();
        }
        
    },
    startGame: function(){
        timer=setInterval(gameObj.timeLeft,1000);
        $("#container-quiz").prepend("<h2>Time Left: <span id='counter-number'>120</span>Seconds</h2>");
        $("#start").remove;
        for(var i =0; i<questionsObj.length; i++){
            quiz.append("<h2>" + questionsObj[i].question + "</h2>")
            for(var j=0; j<questionsObj[i].answerList.length; j++){
                quiz.append("<input type = 'radio' name = 'question-'" + i + "' value='" + questionsObj[i].answerList[j] + "''>" + questionsObj[i].answerList[j]);
            }
        }
        quiz.append("<button id= 'done'>Done</button>");
    },
    done: function(){
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
