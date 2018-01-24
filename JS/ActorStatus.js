function ActorStatus(op) {
    this.health = op.health;
    this.attack = op.attack;
    this.magic = op.magic;
    this.enableDefense = false;
}

function AS(op) {
    return new ActorStatus(op);
}