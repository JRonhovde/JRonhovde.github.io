function nextQuestion() {
  var text;
  var color;
  var dots;
  var answer = 0;
  var max;
  var numbers = {
    7 : 1,
    8 : 2,
    9 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    1 : 7,
    2 : 8,
    3 : 9
  };
  var image = "<img class='dot-pic' src='images/dot.png'></img>";
  var colors =["yellow","blue","aqua","pink","orange"];
  $('.right-answer, .wrong-answer').removeClass('right-answer')
    .addClass('neutral-answer')
    .removeClass('wrong-answer');
  $('.ready-next').removeClass('ready-next');
  $('.resultDiv').html('');
  color = colors[Math.floor(Math.random() * colors.length)];
  $('#flashcard').css('background-color',color);
  $('.question').each(function() {
    var thisDiv = $(this);
    thisDiv.html('');
    if(answer == 5) max = 4;
    else max = 5;
    dots = Math.floor(Math.random() * max) + 1;
    for(var i=0;i<dots;i++) {
      if(i==5) thisDiv.append('<br>'); 
      thisDiv.append(image);
    }
    answer += dots;
  });
  var answerDiv = numbers[answer]- 1;
  $('.answer-div').removeClass('answer-div');
  $numberDivs = $('.numberDiv');
  $numberDivs.eq(answerDiv).addClass('answer-div');
}
function testAnswer($clicked) {
  if($clicked.hasClass('answer-div')) {
    $clicked.addClass('right-answer');
    $('#right-answer').html(':)');
  }else{
    $clicked.addClass('wrong-answer');
    $('.answer-div').addClass('right-answer');
    $('#wrong-answer').html(':(');
  }
  $('#flashcard').addClass('ready-next');
}

$(document).ready(function() {
    $('.numberDiv').on('click',function() {
      testAnswer($(this));
    });
    $('#flashcard').on('click',function() {
      if($(this).hasClass('ready-next')) {
        nextQuestion();
      }
    });
    nextQuestion();
});
