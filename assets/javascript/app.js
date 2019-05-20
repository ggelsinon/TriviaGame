$(document).ready(function() {
// global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered =0;
var time = 0;
// can we make questions objects with the answers as an array in that object??
var questionsObj =[{
  question: "How many No. 1 songs did Johnny Cash have?",
  answerList: ["0","5","13"],
  answer: 2
},{
  question: "Johnny Cash married June Carter in what year?",
  answerList: ["1968","1973","1977"],
  answer: 0
},{
  question: "Johnny Cash had his own television show on ABC in which years?",
  answerList: ["1965-1970","1969-1971","1973-1977"],
  answer: 1
},{

}]

function hideQuiz(){
  $("#questions").hide;
}
//Functions:
//timer as a function - i dunno might work
function timer(){
 
}
//dynamically create question contents using the question objects. I might be over-complicating this???
function createQuestions(){

  for (var i = 0; i < questionsObj.length; i++)
    var questionText = $("<p>");
    questionText.addClass("question");
    questionText.text(questionsObj[i],question, answerList);
  
}
// function startQuiz(){
//onclick event to start the game 
function startQuiz(){
$("#start").on("click", function () {
    $("#questions").show;
    setTimeout(twoMinutes, 1000 * 120);
    $("#timeLeft").append("time remaining :" + time); //how do i set the time variable so it knows what to display

},

function submit(){

},

function reset(){
  $("#submit").on("click", function () {

}

  // show the questions
//   1. How many No. 1 songs did Johnny Cash have?
//13

//   2. Johnny Cash married June Carter in what year?
//1968
//   3. Johnny Cash had his own television show on ABC in which years?
//1969-1971
//   4. What is the first No. 1 song recorded by Johnny Cash, and what year did it reach No. 1?
//“I Walk the Line,” 1956
//   5. The song “A Boy Named Sue” reached No. 1 in 1969. What Grammy did Johnny Cash receive for it?
//Best country vocal performance, male
//   6. What song recorded by Johnny Cash received the CMA award for single of the year in 2003?
//Hurt
//   7. How old was Johnny Cash when he died?
  //71
//   8. Johnny Cash and his wife June Carter Cash won a Grammy for best country vocal performance by a duo or group in 1970 for what song?
  //“If I Were a Carpenter”
//   9. What is the title of Johnny Cash’s last No. 1 single on Billboard’s country chart?
  //One Piece at a Time 1976
//   10. Johnny Cash appeared in how many episodes of the television show Hee Haw?
 // Four

//radio button answers





// each question will have a correct answer and some wrong answers to pick from
$(document).ready(function(){
    var correctAnswers = 0;
    $("select").each(function(){
        if($(this).val()==='right'){ 
            correctAnswers++;    
        }
    });

});


// done on click event will calculate number of correct and incorrect answers to populate my global variables

