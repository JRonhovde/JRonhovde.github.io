function getLetter() {
    var text;
    var colors =["red","yellow","blue","green","aqua","pink","orange"];
    var color;
    text = Math.floor(Math.random() * 99);
    color = colors[Math.floor(Math.random() * colors.length)];
    $('#numberDiv').html(text)
      .css('background-color',color);
}
$(document).ready(function() {
    $('#numberDiv').on('click',function() {
      getLetter();
    });
    getLetter();
});
