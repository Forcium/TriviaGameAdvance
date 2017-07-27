$(document).ready(function() {

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var question = ["What rarity should all steak be served at?", "What is ginger used for when eating sushi?", "Which of these are not authentic mexican food?"];

  var correct = 0;
  var incorrect = 0;

  var q1answer = ["Rare", "Medium Rare", "Medium", "Well Done"];
  var q2answer = ["Spicing it up", "Garnish", "Cleaning taste palate", "Cover up the wasabi taste"];
  var q3answer = ["Taco", "Tamales", "Enchiladas", "Burritos"];
  var answerBulk = [q1answer, q2answer, q3answer];
  var bulk = [];
  // var quest = [];

  var count = 4;
  var counter;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function timeDown() {
    counter = setInterval(decrement,1000);
  }

  function decrement() {
    count--;
    $(".timerCount").html(count);
    if ($(".timerCount").html() == 0) {
      clearInterval(counter);
      showQuestions();
      showAnswers();

    }
  }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Start - Click~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $('#clickMe').on("click", function() {
      $("#clickMe").remove();
      $(".question").html(question[0]);
      $(".answer1").html(answerBulk[0][0]);
      $(".answer2").html(answerBulk[0][1]);
      $(".answer3").html(answerBulk[0][2]);
      $(".answer4").html(answerBulk[0][3]);
        timeDown();


    }) //click function closing tag
//~~~~~~~~~~~~~~~~~~~~~~~~~~~For Loop array of questions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showQuestions() {
        for (i = 0; i < question.length; i++){
          if ($(".question").html() === question[i]){


                $(".question").html(question[i+1]);
          }
        }
      };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~For Loop array of possible answers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showAnswers() {
        for (x = 0; x < answerBulk.length; x++){
          if ($(".answer1").html() === answerBulk[x][0]){

                bulk.push(answerBulk[x+1]);

                $(".answer1").html(bulk[0][0]);
          }
          if ($(".answer2").html() === answerBulk[x][1]){

                bulk.push(answerBulk[x+1]);

                $(".answer2").html(bulk[1][1]);

              // $(".answer2").html(answerBulk[x+1][1]);
          }
          if ($(".answer3").html() === answerBulk[x][2]){

                bulk.push(answerBulk[x+1]);

                $(".answer3").html(bulk[2][2]);
          }
          if ($(".answer4").html() === answerBulk[x][3]){

                bulk.push(answerBulk[x+1]);

                $(".answer4").html(bulk[3][3]);
          }
        }
      };



}); //script closing tag
