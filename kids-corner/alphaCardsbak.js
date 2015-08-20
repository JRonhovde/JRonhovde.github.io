function getLetter() {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var text;
    var colors =["red","yellow","blue","green","aqua","pink","orange"];
    var color;
    color = colors[Math.floor(Math.random() * colors.length)];
    text = letters.charAt(Math.floor(Math.random() * letters.length));
    text += text.toLowerCase();
    $('#letterDiv').html(text);
    $('#letterDiv').css('background-color',color);
}
$(document).ready(function() {
    $('#nextBtn').on('click',function() {
      getLetter();
    });
    getLetter();
});
