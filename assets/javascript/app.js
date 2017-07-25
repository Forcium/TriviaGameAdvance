$(document).ready(function() {

  var question1 = ["What rarity should all steak be served at?"];
  var question2 = ["What is ginger used for when eating sushi?"];
  var question3 = ["Which of these are not authentic mexican food?"];

  var correct = 0;
  var incorrect = 0;

  var q1answer = ["Rare", "Medium Rare", "Medium", "Well Done"];
  var q2answer = ["Spicing it up", "Garnish", "Cleaning taste palate", "Cover up the wasabi taste"];
  var q3answer = ["Taco", "Tamales", "Enchiladas", "Burritos"];


  var count = 16;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer(){
    count = count - 1;
    if (count <= -1){
      $("#splash").html('<img src="../assets/images/time_mediumrare.jpg" />'); //change to image that shows "TIME OUT!"
       return;
    }
    $("#timer").html(count + " secs");
  }

    $("#trivia").html(question1);
        console.log(question1);
    $("#choice1").html(q1answer[0]);
    $("#choice2").html(q1answer[1]);
    $("#choice3").html(q1answer[2]);
    $("#choice4").html(q1answer[3]);


    function clickAnswers() {
      $("#choice2")
      correct = correct + 1;
      $("#splash").html('<img src="../assets/images/mediumrare.jpg" />');
      console.log(correct);
      return;

    })








});
