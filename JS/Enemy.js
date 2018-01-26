function Enemy(actorStatus, name, game) {
    this.status = actorStatus;
    this.name = name;
    this.game = game;
}

Enemy.prototype.doActionRandom = function () {
    var types = ['attack', 'defense'];
    for (i = 0; i < 1; i++) {
        var randomSelected = Math.floor(Math.random(i));
    }
    var selectedAction = types[randomSelected];
    var v = this.status.attack;

    console.log("Enemy does action");
    console.log(selectedAction, v);

    switch (selectedAction) {
        case "attack":
            game.player.receiveAction({ type: 'attack', value: v });
            break;
        case "defense":
            this.enableDefense = true;
            break;
    }
};

Enemy.prototype.receiveAction = function (action) {
    console.log(action);
    switch (action.type) {
        case "attack":
            if (this.status.enableDefense) {
                console.log("this guy is defending itself, ignore attack");
            } else {
                console.log(this.status);
                game.enemies[0].status.health -= action.value;
                $('#HP_Enemy').text('HP: ' + game.enemies[0].status.health);
                console.log(this.status);
                if (this.status.health >= 0) {
                    this.status.health == 0;
                }
            }
            break;
        case "magic":
            if (this.status.enableDefense) {
                console.log("this guy is defending itself, ignore attack");
            } else {
                game.enemies[0].status.health -= action.value;
                $('#HP_Enemy').text('HP: ' + game.enemies[0].status.health);
                console.log(this.status);
                if (this.status.health >= 0) {
                    $('#HP_Enemy').text('HP: ' + game.enemies[0].status.health);
                }
            }
    }
};

Enemy.prototype.endTurno = function () {
    this.status.enableDefense = false;
}
