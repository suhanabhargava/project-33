class Drop{
    constructor(x,y){
   var options={
  isStatic:false,
  restitution:0.1,
  friction:0.001,
  density:0.1
  } 
  this.x=x;
  this.y=y;
  this.r=5;
 
  this.body=Bodies.circle(this.x,this.y,5,options);
  World.add(world,this.body);
 }
update(){

        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(-50,400)});
        }
      
}

 display(){
 push();
 fill("white");
 translate(this.body.position.x,this.body.position.y);
 strokeWeight(0);
 ellipseMode(CENTER);
 ellipse(0,0,this.r,this.r);
 pop();
 
 
 }
 
 
}