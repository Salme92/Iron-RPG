function ActorStatus(op) {
    this.health = op.health;
    this.attack = op.attack;
    this.magic = op.magic;
    this.cure = op.cure;
    this.enableDefense = false;
}

function AS(op) {
    return new ActorStatus(op);
}