function MainCharacter(actorStatus, name, game) {
    this.status = actorStatus;
    this.name = name;
    this.game = game;
};

MainCharacter.prototype.doAction = function (action) {
    switch (action) {
        case "attack":
            if (game.enemies[0].status.health <= 0) {
                return false;
            } else {
                $(".characterDiv").animate({ left: '950px' }, 1000);
                this.game.enemies[0].receiveAction({ type: 'attack', value: this.status.attack });
                $(".characterDiv").animate({ left: '250px' }, 1000);
            }
            break;
        case "defense":
            this.enableDefense = true;
            console.log(this.enableDefense);
            break;
        case "magic":
            if (game.enemies[0].status.health <= 0) {
                return false;
            } else {
                this.game.enemies[0].receiveAction({ type: 'magic', value: this.status.magic });
                console.log("Magia lanzada");
                $('#character').attr('src', "../images/")
            }
            break;
    }
};

MainCharacter.prototype.receiveAction = function (action) {
    switch (action.type) {
        case "attack":
            if (this.status.enableDefense) {
                console.log("this guy is defending itself, ignore attack");
            } else {
                this.health -= action.value;
            }
            break;
    }
};

MainCharacter.prototype.endTurno = function () {
    this.status.enableDefense = false;
}

