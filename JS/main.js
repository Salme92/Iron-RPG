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
    $('#nameEnemyOne').show();
    $('#nameEnemyOne').text(enemyOne.nameEnemy);
    $('#HP').text('HP: ' + heroMain.health);
    $('#HP_Enemy').text('HP: ' + enemyOne.healthEnemy);
    $('.Fight_Menu').show();
    });

    

    enemyOne = new Enemies(160, 30, 25, 'Centaur'); 
    enemyTwo = new Enemies(220, 60, 50, 'Bengal');
    enemyThree = new Enemies(260, 120, 90, 'Abrazador');
    heroMain = new MainCharacter(200, 100, 50, name);

    //Meter los enemigos en un array y que cuando un enemigo sea derrotado saque al siguiente.

});
