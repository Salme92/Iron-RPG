function Game() {    
    this.currentTurno = 0;
    this.player = new MainCharacter(AS({health:100, attack:20}), name, this);
    this.enemies = [
        new Enemy(AS({health:100, attack:20}), 'Centaur',this),
        new Enemy(AS({health:100, attack:20}), 'Bengal',this),
        new Enemy(AS({health:100, attack:20}), 'Abrazador',this)
    ]
    var newPlayer = AS(this.player);
    var newEnemy = AS(this.enemies);
}

Game.prototype.nextTurn = function(action) {
    if (this.currentTurno == 0) {
        this.player.doAction(action);
        this.player.endTurno();
        setTimeout(nextTurn.bind(this),3000);
    } else if (this.currentTurno == 1) {
        this.enemies.forEach( function(enemy) {
            enemy.doActionRandom();
            enemy.endTurno();
        })
    }
    this.currentTurno = (this.currentTurno + 1) % 2;
    console.log("Se ha pasado al siguiente turno, " + this.continueTurno);
}



