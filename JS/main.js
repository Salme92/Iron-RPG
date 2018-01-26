var game = new Game();
var bgNew = "./images/bg_fight.jpg";

$(document).ready(function () {
    $('#start-game').click(function () {
        name = prompt('Hi young soldier... Tell me, What is your name?');
        $('#start-game').hide();
        $('#title-game').hide();
        $('#stage').show();
        $("body").css('background-image', 'url(' + bgNew + ')');
        $('#MainTheme').stop();
        $('#nameCharacter').show();
        $('#nameCharacter').text(name);
        $('#nameEnemyOne').show();
        $('#nameEnemyOne').text(game.enemies[0].name);
        $('#HP').text('HP: ' + game.player.status.health);
        $('#HP_Enemy').text('HP: ' + game.enemies[0].status.health);
        $('.Fight_Menu').show();
    });
});

$("#btn_at").click(function (action) {
    game.player.doAction("attack");
    $('#character').attr('src', 'images/FFBE_Cloud_attack.gif');
    setInterval(function() {
        $('#character').attr('src', 'images/cloud.gif');
  }, 3000);
});

$('#btn_def').click(function (action) {
    game.player.doAction("defense");
    $('#character').attr('src', 'images/FFBE_Cloud_Defense.gif');
    setInterval(function() {
        $('#character').attr('src', 'images/Cloud.gif');
  }, 3000);
});

$('#btn_mag').click(function (action) {
    game.player.doAction("magic");
    var fireSound = "./sounds/magic_sound";
    $(fireSound).load();
})

$('#white_mag').click(function(action){
    game.player.doAction("cure");
    $('#white_mag').attr('src', 'images/FFBE_Cloud_Cure.gif');
    setInterval(function() {
        $('#white_mag').attr('src', 'images/cloud.gif');
  }, 3000);
    
})