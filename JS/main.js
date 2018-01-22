function MainCharacter(){
    this.health = 250;
    this.defense = 50;
    this.attack = 75;
    this.name = name;
}

MainCharacter.prototype.attack = function(){
   return this.attack;
}

MainCharacter.prototype.defense = function(){
   return this.defense;
}

MainCharacter.prototype.magic = function(){
    MainCharacter.call(this, fire);
}

MainCharacter.prototype.object = function(){

}