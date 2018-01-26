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
                $(".characterDiv").css("src", "images/FFBE_Squall_defense.gif")
                $(".characterDiv").animate({ left: '950px' }, 1000);
                this.game.enemies[0].receiveAction({ type: 'attack', value: this.status.attack });
                $(".characterDiv").animate({ left: '250px' }, 1000);
                this.game.nextTurn();
            }
            break;
        case "defense":
            this.enableDefense = true;
            console.log(this.enableDefense);
            this.status.health += 20;
            this.game.nextTurn();
            break;
        case "magic":
            if (game.enemies[0].status.health <= 0) {
                return false;
            } else {
                $('#fire_mag').show();
                $('#fire_mag').animate( { left: '950px' }, 1000);
                this.game.enemies[0].receiveAction({ type: 'magic', value: this.status.magic });
                setInterval(function() {
                    $('#fire_mag').hide();
              }, 1000);
                this.game.nextTurn();

            }
            break;
        case "cure":
            $('#white_mag').show()
            this.game.player.status.receiveAction({type: 'cure', value: this.status.cure});
            $('#white_mag').animate( { top: '150px' }, 1000)
            $('#HP').text('HP: ' + game.player.status.health);
            this.game.nextTurn();
            break;
    }
};

MainCharacter.prototype.receiveAction = function (action) {
    switch (action.type) {
        case "attack":
            if (this.status.enableDefense) {
                console.log("this guy is defending itself, ignore attack");
            } else {
                if(this.status.health >= 0){
                this.status.health -= action.value;
                $('#HP').text('HP: ' + game.player.status.health);
                }else{
                    alert('You lose');
                } 
            }
            break;
    }
};

MainCharacter.prototype.endTurno = function () {
    this.status.enableDefense = false;
}

