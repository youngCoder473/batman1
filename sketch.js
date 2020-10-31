var boy
var umbrellaBoy
var drip = []
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
function preload(){
 boy = loadImage("Walking Frame/walking_1.png");
}
function setup(){
    createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
 umbrellaBoy = new Umbrella(200,200)
}
function draw(){
background("black");
Engine.update(engine);
if(frameCount%70 == 0){
     drip.push( new Drops(random(0,100),0));   
}
umbrellaBoy.display();
for(var i =0; i<drip.length;i++){
    drip[i].display()
    console.log("hi")
}
}