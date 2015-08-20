function nextPattern() {
  var text;
  var color;
  var dots;
  var colors =["red","yellow","blue","green","aqua","pink","orange"];
  var $numberDiv = $('#numberDiv');
  var $patternDivs = $('.patternDiv');
  var answerDiv = Math.floor(Math.random() * 4);
  var patterns = [];
  $('.answer-div').removeClass('answer-div');
  $patternDivs.eq(answerDiv).addClass('answer-div');
  answer = Math.floor(Math.random() * 20);
  $numberDiv.html(answer);
  color = colors[Math.floor(Math.random() * colors.length)];
  $numberDiv.css('background-color',color);
  for(var i=0;i<4;i++) {
    var dotRows;
    if(i == answerDiv) {
      dots = answer;
    }else{
      do {
        dots = Math.floor(Math.random() * 20);
      }while(dots == answer || patterns.indexOf(dots) > -1);
    }
    dotRows = getDotRows(dots); 
    for(var x=0;x<4;x++) {
      var length = dotRows[x];
      for(var d=0;d<length;d++) {
        var index = d + 5*x;
        $patternDivs.eq(i).children('.dot').eq(index).removeClass('dot-hide').addClass('dot-show');
      }
    }
    patterns.push(dots);
  }
}
function testAnswer($clicked) {
  if($clicked.hasClass('answer-div')) {
    displayResult('correct');
  }else{
    displayResult('incorrect');
  }
}
function getDotRows(dots) {
  var dotRows = [0,0,0,0];
  var row;
  while(dots > 0) {
    row = Math.floor(Math.random() * 4);
    if(dotRows[row] < 5) {
      dotRows[row] += 1;
      dots--;
    }
  }
  return dotRows;
}
function displayResult(result) {
  var $resultDiv = $('#resultDiv');
  var $answerDiv = $('.answer-div');
  var width = $answerDiv.width();
  var $answerDivClone = $answerDiv.clone();
  $answerDivClone.css('width',width);
  $answerDivClone.removeClass('patternDiv')
    .addClass('resultAnswer');
  if(result == 'correct') {
    $resultDiv.css('background-color','green')
      .html('<div>Correct!<BR>The answer is:</div>')
      .append($answerDivClone)
      .show();
  }else{
    $resultDiv.css('background-color','red')
      .html('<div>Incorrect!<BR>The answer is:</div>')
      .append($answerDivClone)
      .show();
  }
}

$(document).ready(function() {
    $('.patternDiv').on('click',function() {
      testAnswer($(this));
    });
    $('#resultDiv').on('click',function() {
      $(this).html('').hide();
      nextPattern();
    });
    nextPattern();
});
