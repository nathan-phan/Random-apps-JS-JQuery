$(document).ready(function(){
    $('#res').html(0);
    function displayScreen(x){
        $('#res').html(x);
    }
    var stringScreen = "";
    $('#1').click(function(){
        stringScreen+='1';
        displayScreen(stringScreen);
    });
    $('#2').click(function(){
        stringScreen+='2';
        displayScreen(stringScreen);
    });    
    $('#3').click(function(){
        stringScreen+='3';
        displayScreen(stringScreen);
    });    
    $('#4').click(function(){
        stringScreen+='4';
        displayScreen(stringScreen);
    });    
    $('#5').click(function(){
        stringScreen+='5';
        displayScreen(stringScreen);
    });    
    $('#6').click(function(){
        stringScreen+='6';
        displayScreen(stringScreen);
    });    
    $('#7').click(function(){
        stringScreen+='7';
        displayScreen(stringScreen);
    });    
    $('#8').click(function(){
        stringScreen+='8';
        displayScreen(stringScreen);
    });
    $('#9').click(function(){
        stringScreen+='9';
        displayScreen(stringScreen);
    });
    $('#0').click(function(){
        stringScreen+='0';
        displayScreen(stringScreen);
    });
    $('#ac').click(function(){
        stringScreen='0';
        displayScreen(stringScreen);
    });
    $('#ce').click(function(){
        stringScreen='0';
        displayScreen(stringScreen);
    });
});