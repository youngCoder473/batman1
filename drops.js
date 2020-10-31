class Drops{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10);
        World.add(world,this.body)
    }
    display(){
        push();
        var pos = this.body.position
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,25,25);
        console.log("hi")
        pop();
        
    }
}
