var game = new Game();
var bgNew = "./images/bg_fight.jpg";

var audio = new Audio('./sounds/fight_theme.ogg');
var audioWin = new Audio('./sounds/win.ogg');


$(document).ready(function () {
    $('#start-game').click(function () {
        name = prompt('Hi young soldier... Tell me, What is your name?');
        $('#start-game').hide();
        $('#title-game').hide();
        audio.play();
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
    if(game.enemies[0].status.health <= 0){
        $('.winText').show();
        audio.pause();
        audio.currentTime = 0;
        audioWin.play();

    }else{
        game.player.doAction("attack");
        $('#character').attr('src', 'images/FFBE_Cloud_Attack.gif');
        setInterval(function() {
            $('#character').attr('src', 'images/Cloud.gif');
      }, 3000);
    }
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
})

$('#white_mag').click(function(action){
    game.player.doAction("cure");
    $('#white_mag').attr('src', 'images/FFBE_Cloud_Cure.gif');
    setInterval(function() {
        $('#white_mag').attr('src', 'images/Cloud.gif');
  }, 3000);
    
})