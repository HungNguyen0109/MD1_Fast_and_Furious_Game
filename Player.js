class Car {
    constructor(image, x, y, width, height, src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
        this.dir = "";
    }

    drawImage(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    moveRight() {
        this.x += 5;
    }

    moveLeft() {
        this.x -= 5;
    }

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 10;
    }

    setSrc(src) {
        this.src = src;
    }

    getSrc() {
        return this.src;
    }

    control() {
        switch (this.dir) {
            case "left":
                if (this.x > 100)
                    this.moveLeft();
                break;
            case "right":
                if (this.x < 440)
                    this.moveRight();
                break;
            case "up":
                if (this.y > 0)
                    this.moveUp();
                break;
            case "down":
                if (this.y < 870)
                    this.moveDown();
                break;

            default:

        }
    }
}
