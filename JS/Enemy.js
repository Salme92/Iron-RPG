function Enemies(health,attack,defense,name){
    this.healthEnemy = health;
    this.attackEnemy = attack;
    this.defenseEnemy = defense;
    this.nameEnemy = name;
}

Enemies.prototype.ataque = function(healthEnemy){
    this.attack -= heroMain.health;
    $('#HP').text('HP: ' + heroMain.health);
}

Enemies.prototype.defense = function(){
   return this.defenseEnemy;
}

Enemies.prototype.damageReceive = function(attack){
    this.healthEnemy -= heroMain.attack;
    $('#HP_Enemy').text('HP: ' + enemyOne.healthEnemy);
}


MainCharacter.prototype.objectos = function(){

}

if(this.healthEnemy == 0){
    alert('World have been save of darkness!');
}