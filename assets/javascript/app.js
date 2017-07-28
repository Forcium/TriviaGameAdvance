$(document).ready(function() {
$('.triviaEnd').hide();
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

  var pics = ["assets/images/timeout.png", "assets/images/correct.png", "assets/images/incorrect.png"]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function timeDown() {
    counter = setInterval(decrement,1000);
  }

  function decrement() {
    count--;
    $(".timerCount").html(count);
    timeOver();
  }

  function timeOver() {
    for(var i = 0; i < rightAns.length; i++){
    if ($(".timerCount").html() == 0) {
      $("#pics").empty();
      $(".triviaStart").hide();
      $("#pics").show();
      $("#pics").html("<img src='" + pics[0] + "'/>");
        setTimeout(function(){
          unAnswered += 1;
          total += 1;
          clearInterval(counter);
          count = 11;
          showQuestions();
          showAnswers();
          timeDown();
          $(".triviaStart").show();
          $("#pics").hide();
          totals();

        }, 3000);
          return;
      }
    }
  }

  $('.answer').on("click", function() {
    for(var i = 0; i < rightAns.length; i++){
      if($(this).html() == rightAns[i]){
        $("#pics").empty();
        $(".triviaStart").hide();
        $("#pics").show();
        $("#pics").html("<img src='" + pics[1] + "''/>");
          setTimeout(function(){
            correct += 1;
            total += 1;
            clearInterval(counter);
            count = 11;
            showQuestions();
            showAnswers();
            timeDown();
            $(".triviaStart").show();
            $("#pics").hide();
            totals();
          }, 3000);
        return;
      }
    }
    if(gotRight === false){
      $("#pics").empty();
      $(".triviaStart").hide();
      $("#pics").show();
      $("#pics").html("<img src='" + pics[2] + "'/>");
        setTimeout(function(){
          incorrect += 1;
          total += 1;
          clearInterval(counter);
          count = 11;
          showQuestions();
          showAnswers();
          timeDown();
          $(".triviaStart").show();
          $("#pics").hide();
          totals();
        }, 3000);
      return;
    }
    gotRight = false;
});

function totals() {
  if(total == 3) {
    $(".triviaStart").hide();
    $(".triviaEnd").show();
    $(".totalCorrect").html("Total Correct: "+correct);
    $(".totalWrong").html("Total Wrong: "+incorrect);
    $(".totalUnanswered").html("Total Unanswered: "+unAnswered);
    clearInterval(counter);
    return;
  }

}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Start - Click~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    $('#clickMe').on("click", function() {
      $(".triviaStart").show();
      $("#clickMe").remove();
      $(".question").html(question[0]);
      $(".answer1").html(answerBulk[0][0]);
      $(".answer2").html(answerBulk[0][1]);
      $(".answer3").html(answerBulk[0][2]);
      $(".answer4").html(answerBulk[0][3]);
        timeDown();
    }) //click function closing tag



    $('#restart').on("click", function() {
      $(".triviaStart").show();
      $(".triviaEnd").hide();
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
