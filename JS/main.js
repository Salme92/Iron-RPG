var heroMain;
var enemyOne; 
$(document).ready(function() {
    $('#start-game').click(function(){
       name = prompt('Hi young soldier... Tell me, What is your name?'); 
    $('#start-game').hide();
    $('#title-game').hide();
    $('#stage').show();
    $('#nameCharacter').show();
    $('#nameCharacter').text(name);
    $('#HP').text('HP: ' + heroMain.health);
    $('.Fight_Menu').show();
    })
    heroMain = new MainCharacter(200, 100, 50, name);
    enemyOne = new Enemies(120, 30, 25, 'Gnome'); 
    enemyTwo = new Enemies(220, 60, 50, 'Bengal');
    enemyThree = new Enemies(260, 120, 90, 'Abrazador');

    //Meter los enemigos en un array y que cuando un enemigo sea derrotado saque al siguiente.

});