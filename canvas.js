class Options{
    constructor(){
    this.canvas = document.getElementById('game');
    this.canvas.width = 570;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    this.rockImage =  new Image();
    this.paperImage  = new Image();
    this.scissorImage = new Image();
    this.selectImage = new Image();
    this.rockImage.src = 'images/rock.png';
    this.paperImage.src = 'images/paper.png';
    this.scissorImage.src = 'images/scissor.png';
    this.selectImage.src = 'images/select.png';
    this.random = 0;
    this.x = 220;
    this.y = 300;
    onload=()=>{
        this.ctx.drawImage(this.rockImage,10,25,100,100);
        this.ctx.drawImage(this.paperImage,220,25,100,100);
        this.ctx.drawImage(this.scissorImage,450,25,100,100);
        this.ctx.drawImage(this.selectImage,this.x,this.y,100,100);
    } 
    this.keyPress = function(e){
     e==37?this.x-=5:e==38?this.y-=5:e==39?this.x+=5:this.y+=5;
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.drawImage(this.rockImage,10,25,100,100);
       this.ctx.drawImage(this.paperImage,220,25,100,100);
       this.ctx.drawImage(this.scissorImage,450,25,100,100);
       this.ctx.drawImage(this.selectImage,this.x,this.y,100,100);
       
       if((this.x >= 0 && this.x<=70) && (this.y >=20 && this.y<=50 ))
       {  this.x = 220;
          this.y = 300;
          this.validator(1,2,3);
        }
       else if((this.x >= 200&& this.x <= 250) && (this.y >=20 && this.y<=50 ))
        {   this.x = 220;
            this.y = 300;
            this.validator(2,1,3);
        }
       else if((this.x >= 430 && this.x<=470) && (this.y >=20 && this.y<=50)){
            this.x = 220;
            this.y = 300;
            this.validator(3,1,2);
            }
    }
    this.validator = function(optionSelected,a,b){
        this.random= generateRandomNumber(optionSelected);
            switch(this.random){
                case a:document.getElementById('computer').innerHTML=1+parseInt(document.getElementById('computer').innerText);
                       break;
                case b:document.getElementById('player').innerHTML=1+parseInt(document.getElementById('player').innerText);
                       break;
            }
         }
    }
}

let option = new Options();

addEventListener("keydown",function(event){
    option.keyPress(event.keyCode);     
   })

//    ar=[1,2,3];
   let generateRandomNumber = function(optionSelected){
    let rand = Math.floor(Math.random()*3)+1;
    return rand === optionSelected? generateRandomNumber(optionSelected) : rand;
}