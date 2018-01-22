function MainCharacter(health,attack,defense,name){
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.name = name;
}

MainCharacter.prototype.attack = function(){
    return this.attack;
}

MainCharacter.prototype.defense = function(){
   return this.defense;
}

MainCharacter.prototype.damageReceive = function(attackEnemy){
    this.health -= enemyOne.attackEnemy;
    $('#HP').text('HP: ' + heroMain.health);
}

MainCharacter.prototype.magic = function(){
    
}


MainCharacter.prototype.objectos = function(){

}