class rope {
    constructor(bodyA, bodyB){
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 200
        }
        this.bodyB = bodyB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
        line(posA.x,posA.y-25,this.bodyB.position.x,this.bodyB.position.y)
    }

}