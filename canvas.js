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
    this.optionSelected = 0;
    this.random = 0;
    this.x = 425;
    this.y = 390;
    onload=()=>{
        this.ctx.drawImage(this.rockImage,175,25,100,100);
        this.ctx.drawImage(this.paperImage,425,25,100,100);
        this.ctx.drawImage(this.scissorImage,670,25,100,100);
        this.ctx.drawImage(this.selectImage,this.x,this.y,100,100);
    } 
    this.keyPress = function(e){
     e==37?this.x-=5:e==38?this.y-=5:e==39?this.x+=5:this.y+=5;
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.drawImage(this.rockImage,175,25,100,100);
       this.ctx.drawImage(this.paperImage,425,25,100,100);
       this.ctx.drawImage(this.scissorImage,670,25,100,100);
       this.ctx.drawImage(this.selectImage,this.x,this.y,100,100);
       this.random= Math.floor(Math.random()*3)+1;
       if(this.x == 175)
       {  this.x = 425;
          this.y = 390;
          this.optionSelected = 1;
        }
       else if(this.x == 425)
        {   this.x = 425;
            this.y = 390;
            this.optionSelected = 2;
        }
       else if(this.x == 670){
             this.x = 425;
             this.y = 390;
             this.optionSelected = 3;
            }
      if(this.random==this.optionSelected){
         let points = document.getElementById('player').innerText;
         document.getElementById('player').innerHTML=1+parseInt(points);
         this.optionSelected=0;
      }
      else{
         let point = document.getElementById('computer').innerText;
          document.getElementById('computer').innerHTML=1+parseInt(point);
      }
    }
}

}
let option = new Options();

addEventListener("keydown",function(event){
    option.keyPress(event.keyCode);     
   })