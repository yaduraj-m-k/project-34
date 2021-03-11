class Fly{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:10,
           stiffness:0.04,
           
        }
     
        this.chain= Constraint.create(options);
        World.add(world,this.chain);
    }

    fly(){
        this.sling.bodyA= null;
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        stroke("white");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}