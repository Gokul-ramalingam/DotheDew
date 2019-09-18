class Options{
    constructor(){
    this.canvas = document.getElementById('game');
    this.canvas.width = 970;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext('2d');
    this.rockImage =  new Image();
    this.paperImage  = new Image();
    this.scissorImage = new Image();
    this.selectImage = new Image();
    this.rockImage.src = 'images/rock.png';
    this.paperImage.src = 'images/paper.png';
    this.scissorImage.src = 'images/scissor.png';
    this.selectImage.src = 'images/select.png';
    this.ar = [];
    this.x = 425;
    this.y = 390;
    onload=()=>{
        this.ctx.drawImage(this.rockImage,175,25,100,100);
        this.ctx.drawImage(this.paperImage,425,25,100,100);
        this.ctx.drawImage(this.scissorImage,670,25,100,100);
        this.ctx.drawImage(this.selectImage,this.x,this.y,100,100);
    } 
    this.ar.push(this.selectImage);
    this.keyPress = function(e){
     e==37?this.x-=5:e==38?this.y-=5:e==39?this.x+=5:this.y+=5;
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.drawImage(this.rockImage,175,25,100,100);
       this.ctx.drawImage(this.paperImage,425,25,100,100);
       this.ctx.drawImage(this.scissorImage,670,25,100,100);
       console.log(this.ctx.drawImage(this.selectImage,this.x,this.y,100,100));
    }
}

}
let option = new Options();

addEventListener("keydown",function(event){
    option.keyPress(event.keyCode);     
   })