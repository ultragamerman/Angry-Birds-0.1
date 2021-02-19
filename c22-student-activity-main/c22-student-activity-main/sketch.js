const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ceiling;
var ground;
var engine,world;
var object,box1,box2,box3,box4,floor1,pig1,pig2,log1,log2,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(700,350,70,70);
    box2 = new box(920,350,70,70);
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    floor1 = new floor(600,380,1200,20);
    pig1 = new pig(810,350,50,50);
    pig2 = new pig(810,220,50,50);
    log1 = new log(810,260,300,15,PI);
    log2 = new log(810,200,300,15,PI);
    bird1 = new bird(100,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    floor1.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
}
