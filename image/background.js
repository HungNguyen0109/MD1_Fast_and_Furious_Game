class Background {
    constructor(image,x,y,width,height,src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
    }
    drawImage(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    moveDownB(){
        this.y += 5;
    }
}
