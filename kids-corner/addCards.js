function nextQuestion() {
  var text;
  var color;
  var dots;
  var answer = 0;
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
    dots = Math.floor(Math.random() * 4) + 1;
    for(var i=0;i<dots;i++) {
      if(i==5) thisDiv.append('<br>'); 
      thisDiv.append(image);
    }
    answer += dots;
  });
  var usedAnswers = [];
  var answerDiv = Math.floor(Math.random() * 4);
  $('.answer-div').removeClass('answer-div');
  $numberDivs = $('.numberDiv');
  $numberDivs.eq(answerDiv).addClass('answer-div');
  for(var i=0;i<4;i++) {
    var numberDiv = $numberDivs.eq(i);
    if(i == answerDiv) {
      number = answer;
    }else{
      do {
        number = Math.floor(Math.random() * 8) +2;
      }while(number == answer || usedAnswers.indexOf(number) > -1);
    }
    numberDiv.html(number);
    usedAnswers.push(number);
  }
}
function testAnswer($clicked) {
  if($clicked.hasClass('answer-div')) {
    $clicked.removeClass('neutral-answer')
      .addClass('right-answer');
    $('#right-answer').html(':)');
  }else{
    $clicked.removeClass('neutral-answer')
      .addClass('wrong-answer');
    $('.answer-div').removeClass('neutral-answer')
      .addClass('right-answer');
    $('#wrong-answer').html(':\(');
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
