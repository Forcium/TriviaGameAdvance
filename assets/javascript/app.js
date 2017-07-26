$(document).ready(function() {

  var question1 = ["What rarity should all steak be served at?"];
  var question2 = ["What is ginger used for when eating sushi?"];
  var question3 = ["Which of these are not authentic mexican food?"];

  var correct = 0;
  var incorrect = 0;

  var q1answer = ["Rare", "Medium Rare", "Medium", "Well Done"];
  var q2answer = ["Spicing it up", "Garnish", "Cleaning taste palate", "Cover up the wasabi taste"];
  var q3answer = ["Taco", "Tamales", "Enchiladas", "Burritos"];


  var count = 15;
  var counter;

  function timeDown() {
      counter = setInterval(decrement, 1000);
    }

  function decrement() {
      count--;
      $("#timerCount").html(count);

      if (count === 0) {
        stop();
        alert("Time Up!");
      }
    }

  $('#clickMe').on("click", function() {

    $("#clickMe").remove();
    $("#timerCount").html(count);
    $("#question").html(question1);
    $("#answer1").html(q1answer[0]);
    $("#answer2").html(q1answer[1]);
    $("#answer3").html(q1answer[2]);
    $("#answer4").html(q1answer[3]);

    timeDown();
  })

    // count = count - 1;
    // if (count <= -1){
    //   $("#innerFront").html('<img src="../assets/images/time_mediumrare.jpg" />'); //change to image that shows "TIME OUT!"
    //    return;
    // }
    //
    //   $("#timerCount").html(count + " secs");


});
