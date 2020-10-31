class Umbrella{
constructor(x,y){
    var options = {
        isStatic:true
    }
    this.body = Bodies.circle(x,y,100,options);
    World.add(world,this.body);
}
display(){
    push();
    var pos = this.body.position
    ellipseMode(CENTER);
    image(boy,pos.x,pos.y,250,200);
    pop();
}
}