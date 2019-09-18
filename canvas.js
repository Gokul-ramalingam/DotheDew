class Options{
    constructor(){
    this.canvas = document.getElementById('game');
    this.canvas.width = 970;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext('2d');
    this.rockImage =  new Image();
    this.paperImage  = new Image();
    this.scissorImage = new Image();
    this.rockImage.src = 'images/rock.png';
    this.paperImage.src = 'images/paper.png'
    this.scissorImage.src = 'images/scissor.png'
    onload=()=>{
        this.ctx.drawImage(this.rockImage,175,25,100,100);
        this.ctx.drawImage(this.paperImage,425,25,100,100);
        this.ctx.drawImage(this.scissorImage,670,25,100,100);
        this.ctx.drawImage();
    }
    
}
}
let option = new Options();