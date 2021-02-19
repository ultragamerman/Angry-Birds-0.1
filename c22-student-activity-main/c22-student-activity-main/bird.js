class bird{
    constructor(x,y,width,height){
        var option = {
            restitution : 1,
            density : 1,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}