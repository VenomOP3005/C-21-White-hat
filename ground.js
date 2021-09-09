class Ground {
    constructor(x, y, height, width) {
        var options = {
            isStatic: true,
           density: 1
        }

        this.body = Bodies.rectangle(x, y, height, width, options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);

    }

    display() {
        rectMode(CENTER);
        fill(225);
        var pos = this.body.position;
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}