class Bob {
    constructor(x, y) {
      var options = {
        isStatic : false,
        restitution : 1,
        density : 1.2,
        friction : 0
      }
      this.body = Matter.Bodies.circle(x, y, 25, options);
      this.radius = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill(255,0,255)
      ellipse(pos.x, pos.y, this.radius);
    }
  }