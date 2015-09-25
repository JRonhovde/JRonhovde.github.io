function nextQuestion() {
    var text;
    var color;
    var dots;
    answer = 0;
    var max;
    var addend;
    var numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
            ];
    var colors =["yellow","blue","aqua","pink","orange"];
    color = colors[Math.floor(Math.random() * colors.length)];
    $('#answer').html('');
    $('#flashcard').css('background-color',color);
    $('.addend').each(function() {
        var thisSpan = $(this);
        thisSpan.html('');
        if(addend == 5) max = 4;
        else max = 5;
        addend = Math.floor(Math.random() * max) + 1;
        thisSpan.html(addend);
        answer += addend;
    });
}
function checkAnswer() {
    $answerDiv = $('#answer');
    var entered = $answerDiv.html();
    if(entered == '') return;
    var newHtml;
    if(answer == entered) {
        newHtml = "<span class='right-answer'>"+entered+"</span>";
        $answerDiv.html(newHtml);
    }else{
        newHtml = "<span class='right-answer'>"+answer+"</span>";
        newHtml += "<span class='wrong-answer'>"+entered+"</span>";
        $answerDiv.html(newHtml);
    }

    $('#flashcard').addClass('ready-next');
}
function enterAnswer($clicked) {
    var $answerDiv = $('#answer');
    var currentAnswer = $answerDiv.html();
    if(currentAnswer.length > 1) {
        return;
    }else{
        $answerDiv.html(currentAnswer+$clicked.html());
    }

}

$(document).ready(function() {
    $('.numberDiv').on('click',function() {
        enterAnswer($(this));
    });
    $('#flashcard').on('click',function() {
        if($(this).hasClass('ready-next')) {
            nextQuestion();
        }
    });
    $('.check-answer').on('click',function() {
        checkAnswer();
    });
    $('.clear-answer').on('click',function() {
        $('#answer').html('');
    });
    nextQuestion();
});
