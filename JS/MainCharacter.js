function MainCharacter(actorStatus,name,game){
    this.status = actorStatus;
    this.name = name;
    this.game = game;
};

MainCharacter.prototype.doAction = function(action){
    switch(action){
        case "attack":
        console.log("Entro a Attack");
            game.enemies.reciveAction({type:'attack',value:this.attack});
        break;
        case "defense":
            this.enableDefense = true;
        break;
    }
};

MainCharacter.prototype.receiveAction = function(action){
    switch(action.type){
        case "atack":
            if(this.status.enableDefense){
                console.log("this guy is defending itself, ignore attack");
            }else{
                this.health -= action.value;
            }
        break;
    }
};

MainCharacter.prototype.endTurno = function(){
    this.status.enableDefense = false;
}

