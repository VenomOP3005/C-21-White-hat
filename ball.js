class Ball1 {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'desnsity': 0.2,
            'friction': 0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
    }
    
    display() {
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}