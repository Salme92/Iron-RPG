var game = new Game();

$(document).ready(function () {
    $('#start-game').click(function () {
        name = prompt('Hi young soldier... Tell me, What is your name?');
        $('#start-game').hide();
        $('#title-game').hide();
        $('#stage').show();
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
});

$('#btn_def').click(function (action) {
    game.player.doAction("defense");
    $('#character').attr('src', 'images/FFBE_Squall_defense.png');
});

$('#btn_mag').click(function (action) {
    game.player.doAction("magic");
})