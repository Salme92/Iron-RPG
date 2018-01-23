function Enemy(actorStatus,name,game){
    this.status = actorStatus;
    this.name = name;
    this.game = game;
}

Enemy.prototype.doActionRandom = function(){
    var types = ['atack','defense'];
    for(i = 0; i < types.length; i++){
       var randomSelected = Math.floor(Math.random(types[i].length));
    }
    var selectedAction = randomSelected;
    var v = 10;

    console.log("Enemy does action");
    console.log(selectedAction,v);

    switch(selectedAction){
        case "attack":
            game.player.reciveAction({type:'attack',value:v});
        break;
        case "defense":
            this.enableDefense = true;
        break;
    }
};

Enemy.prototype.receiveAction = function(action){
    console.log("Enemy recives action");
    console.log(action);
    switch(action.type){
        case "attack":
            if(this.status.enableDefense){
                console.log("this guy is defending itself, ignore attack");
            }else{
                this.health -= action.value;
            }
        break;
    }
};

Enemy.prototype.endTurno = function(){
    this.status.enableDefense = false;
}
