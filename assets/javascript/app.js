$(document).ready(function() {

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var question = ["What rarity should all steak be served at?", "What is ginger used for when eating sushi?", "Which of these are not authentic mexican food?"];

  var correct = 0;
  var gotRight = false;
  var incorrect = 0;

  var q1answer = ["Rare", "Medium Rare", "Medium", "Well Done"];
  var q2answer = ["Spicing it up", "Garnish", "Cleaning taste palate", "Cover up the wasabi taste"];
  var q3answer = ["Taco", "Tamales", "Enchiladas", "Burritos"];
  var answerBulk = [q1answer, q2answer, q3answer];
  // var bulk = [];
  // var quest = [];
  var rightAns = ["Medium Rare", "Cleaning taste palate", "Burritos"];

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
      count = 4;
      timeDown();

    }
  }

  $('.answer').on("click", function() {

    for(var i = 0; i < rightAns.length; i++){
      if($(this).html() == rightAns[i]){
        correct += 1;
        gotRight = true;
        clearInterval(counter);
        showQuestions();
        showAnswers();
        count = 4;
        timeDown();
        console.log(correct);
        return;
      }
    }
    if(gotRight === false){
      incorrect += 1;
      clearInterval(counter);
      showQuestions();
      showAnswers();
      count = 4;
      console.log(incorrect);
      timeDown();
    }
    gotRight = false;
});

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
          // if ($(".answer1").html() === answerBulk[x][0]){
            $(".answer1").html(answerBulk[x+1][0]);
            $(".answer2").html(answerBulk[x+1][1]);
            $(".answer3").html(answerBulk[x+1][2]);
            $(".answer4").html(answerBulk[x+1][3]);
            return;
          }
          // if ($(".answer2").html() === answerBulk[x][1]){
          //       $(".answer2").html(answerBulk[x+1][1]);
          //       return;
          // }
          // if ($(".answer3").html() === answerBulk[x][2]){
          //       $(".answer3").html(answerBulk[x+1][2]);
          //       return;
          // }
          // if ($(".answer4").html() === answerBulk[x][3]){
          //       $(".answer4").html(answerBulk[x+1][3]);
          //       return;
          // }
        }
      };



}); //script closing tag
