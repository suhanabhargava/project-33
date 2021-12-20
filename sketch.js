
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var maxDrops=500;
var drops=[];
var rand;
var thunder, thunder1,thunder2,thunder3,thunder4;
var umbrellaObj;
var backImg;
var thunderFrame;
var boy,boyimg;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    backImg=loadImage("images/2782569.jpg");
    boyimg=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
}

function setup(){
    createCanvas(700, 670);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    boy=createSprite(350,410,10,10);
    boy.addAnimation("boy_walk",boyimg);
    boy.scale=0.6;

    umbrellaObj=new Umbrella(width/2,270);

    if(frameCount % 100==0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,500),random(0,450)));
    }
    drawSprites();
}



   
    
}

function draw(){
    background(backImg);
    Engine.update(engine);

    for(var i=0;i<maxDrops;i++)
    {
        drops[i].display();
        drops[i].update();
        
    }

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderFrame=frameCount;
        thunder = createSprite(random(0,500), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    if(thunderFrame + 12 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrellaObj.display();
    drawSprites();
}   

