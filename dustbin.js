class dustbin{
    constructor(x,y){
        var options={
            isStatic:true
            
        }
        this.x=x;
        this.y=y;
        this.width = 200;
        this.height=100;
        this.thickness=20;

        this.lbody = Bodies.rectangle(this.x-this.width/2, this.y,this.thickness,this.height,options)
        this.rbody = Bodies.rectangle(this.x+this.width/2,this.y,this.thickness,this.height,options);
        this.basebody = Bodies.rectangle(this.x, this.y+this.height/2, this.width,this.thickness, options)
        World.add(world,this.lbody);
        
        World.add(world,this.lbody);
        World.add(world,this.rbody);
        World.add(world,this.basebody);

    }

    display(){
        var lpos=this.lbody.position;
        var rpos=this.rbody.position;
        var bpos=this.basebody.position;
        push()
        translate(lpos.x,lpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,0);
        rect(0,0,this.thickness,this.height);
              
        pop();
        push()
        translate(rpos.x,rpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,0);
        rect(0,0,this.thickness,this.height);
              
        pop();
        push()
        translate(bpos.x,bpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,0);
        rect(0,0,this.width,this.thickness);
              
        pop();
    }
}

//-100, 100, 20,100 
//0,80,200,20
//100