class Pacman{
    constructor(x,y,width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;      
        this.direction = DIRECTION_RIGHT;
        this.currentFrame = 1;
        this.frameCount = 7;
    }


    moveProcess(){
        this.changeDirectionIfPossible();
        this.movedForwards();
        if(this.checkCollision()){
            this.moveBackwards();
        }
    }

    eat(){

    }

    moveBackwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed
                break;

            case DIRECTION_UP:
                this.y += this.speed
                break;

            case DIRECTION_LEFT:
                this.x += this.speed
                break;
                
            case DIRECTION_BOTTON:
                this.y -= this.speed
                break;
        }
    }

    movedForwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x += this.speed
                break;

            case DIRECTION_UP:
                this.y -= this.speed
                break;

            case DIRECTION_LEFT:
                this.x -= this.speed
                break;
                
            case DIRECTION_BOTTON:
                this.y += this.speed
                break;
        }
    }

    checkCollision(){
        let isCollided = False
        if(
            map[this.getMapY()][this.getMapX()] == 1 || 
            map[this.getMapRightSide()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapRightSide()] == 1 ||
            map[this.getMapYRightSide()][this.getMapXRightSide()] == 1
        ){
            return true;
        }
        return false;
    }

    checkGhostCollision(){

    }

    chancedirectionIfPossible(){

    }

    changeAnimation(){
        
    }

    draw(){

    }

    getMapX(){
        return parseInt(this.x / oneBlockSize)
    }

     getMapY(){
        return parseInt(this.y / oneBlockSize)
    }

    getMapXRightSide(){
        return parseInt((this.x + 0.9999 * oneBlockSize) / oneBlockSize)
    }

    getMapYRightSide(){
        return parseInt((this.y + 0.9999 * oneBlockSize) / oneBlockSize)
    }
    


}