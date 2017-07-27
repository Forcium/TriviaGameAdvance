$(document).ready(function() {

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var question = ["What rarity should all steak be served at?", "What is ginger used for when eating sushi?", "Which of these are not authentic mexican food?"];

  var correct = 0;
  var gotRight = false;
  var incorrect = 0;
  var unAnswered = 0;
  var total = 0;

  var q1answer = ["Rare", "Medium Rare", "Medium", "Well Done"];
  var q2answer = ["Spicing it up", "Garnish", "Cleaning taste palate", "Cover up the wasabi taste"];
  var q3answer = ["Taco", "Tamales", "Enchiladas", "Burritos"];
  var answerBulk = [q1answer, q2answer, q3answer];

  var rightAns = ["Medium Rare", "Cleaning taste palate", "Burritos"];

  var count = 11;
  var counter;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function timeDown() {
    counter = setInterval(decrement,1000);
  }

  function decrement() {
    count = count -1;
    $(".timerCount").html(count);
    if ($(".timerCount").html() == 0) {
      unAnswered += 1;
      total += 1;
      clearInterval(counter);
      count = 11;
      showQuestions();
      showAnswers();
      timeDown();
      console.log("Unanswered: " +unAnswered);
      console.log("!!!!"+total);
      console.log("countdown" +counter);
      totals();
    }
  }

  $('.answer').on("click", function() {
    for(var i = 0; i < rightAns.length; i++){
      if($(this).html() == rightAns[i]){
        correct += 1;
        total += 1;
        gotRight = true;
        clearInterval(counter);
        count = 11;
        showQuestions();
        showAnswers();
        timeDown();
        console.log("Correct: " +correct);
        totals();
        return;
      }
    }
    if(gotRight === false){
      incorrect += 1;
      total += 1;
      clearInterval(counter);
      count = 11;
      showQuestions();
      showAnswers();
      console.log("Wrong: " +incorrect);
      timeDown();
      totals();
    }
    gotRight = false;
});

function totals() {
  if(total == 3) {
    $(".triviaStart").css("visibility","hidden");
    $(".triviaEnd").css("visibility", "visible");
    $(".totalCorrect").html("Total Correct: "+correct);
    $(".totalWrong").html("Total Wrong: "+incorrect);
    $(".totalUnanswered").html("Total Unanswered: "+unAnswered);
  }
  return;
}





//~~~~~~~~~~~~~~~~~~~~~~~~~~~Start - Click~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $('#clickMe').on("click", function() {
      $(".triviaStart").css("visibility", "visible");
      $("#clickMe").remove();
      $(".question").html(question[0]);
      $(".answer1").html(answerBulk[0][0]);
      $(".answer2").html(answerBulk[0][1]);
      $(".answer3").html(answerBulk[0][2]);
      $(".answer4").html(answerBulk[0][3]);
        timeDown();

    }) //click function closing tag


    $('#restart').on("click", function() {
      $(".triviaStart").css("visibility", "visible");
      $(".triviaEnd").css("visibility", "hidden");
      $(".question").html(question[0]);
      $(".answer1").html(answerBulk[0][0]);
      $(".answer2").html(answerBulk[0][1]);
      $(".answer3").html(answerBulk[0][2]);
      $(".answer4").html(answerBulk[0][3]);

        clearInterval(counter);
        count = 11;
        correct = 0;
        gotRight = false;
        incorrect = 0;
        unAnswered = 0;
        total = 0;
        timeDown();
      })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~For Loop array of questions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showQuestions() {
        for (i = 0; i < question.length; i++){
          if ($(".question").html() === question[i]){
                $(".question").html(question[i+1]);
                return;
          }
        }
      };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~For Loop array of possible answers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showAnswers() {
        for (x = 0; x < answerBulk.length; x++){
          if(answerBulk[x+1] == undefined){
            return;
          }
          if($(".answer1").html() === answerBulk[x][0]){
            $(".answer1").html(answerBulk[x+1][0]);
            $(".answer2").html(answerBulk[x+1][1]);
            $(".answer3").html(answerBulk[x+1][2]);
            $(".answer4").html(answerBulk[x+1][3]);
            return;
          }
        }
      };

}); //script closing tag
