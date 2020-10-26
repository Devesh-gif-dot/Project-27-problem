class roof{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.roof1 = Bodies.rectangle(this.x,this.y,this.width,this.height)
        World.add(world,this.roof1);
    }

    display(){
        var pos = this.roof1.position
        rect(pos.x,pos.y,this.roof1.width,this.roof1.height)
    }

}