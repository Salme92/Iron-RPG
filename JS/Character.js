function MainCharacter(health,attack,defense,name){
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.name = name;
}

MainCharacter.prototype.ataque = function(){
    enemyOne.damageReceive();
}

MainCharacter.prototype.defense = function(){
    this.defense += 25;
}

MainCharacter.prototype.damageReceive = function(attackEnemy){
    this.health -= enemyOne.attackEnemy;
    $('#HP').text('HP: ' + heroMain.health);
}

MainCharacter.prototype.magic = function(){
    
}


MainCharacter.prototype.objectos = function(){

}