function Enemies(health,attack,defense,name){
    this.healthEnemy = health;
    this.attackEnemy = attack;
    this.defenseEnemy = defense;
    this.nameEnemy = name;
    damageReceive = function(){
        this.attack
    }
}

Enemies.prototype.attack = function(){
    return this.attackEnemy;
}

Enemies.prototype.defense = function(){
   return this.defenseEnemy;
}

Enemies.prototype.damageReceive = function(attackEnemy){
    return this.health -= attackEnemy;
}


MainCharacter.prototype.objectos = function(){

}