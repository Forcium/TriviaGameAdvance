$(document).ready(function() {

  var question1 = ["What rarity should all steak be served at?"];
  var question2 = ["What is ginger used for when eating sushi?"];
  var question3 = ["Which of these are not authentic mexican food?"];

  var q1answer1 = ["Rare"];
  var q1answer2 = ["Medium Rare"];
  var q1answer3 = ["Medium"];
  var q1answer4 = ["Well Done"];

  var count = 16;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer(){
    count = count - 1;
    if (count <= -1){
      // alert("Time's Up!  Next question!")
       return;
    }
    $("#timer").html(count + " secs");
  }

  $("#trivia").html(question1);
      console.log(question1);
    if(question1){
      $("#choice1").html(q1answer1);
      $("#choice2").html(q1answer2);
      $("#choice3").html(q1answer3);
      $("#choice4").html(q1answer4);
    }

    $('#choice1').on("click", function() {
  	      amp = amp + cryst1;
            console.log (amp + " c1 amped up");
          $("#cAmp").html(amp);
          clickTotal();     //run function to check if need to update win/loss
        })







});
