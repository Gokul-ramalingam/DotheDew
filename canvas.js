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
       
       if((this.x >= 150 && this.x<=200) && (this.y >=20 && this.y<=50 ))
       {  this.x = 425;
          this.y = 390;
          this.validator(1,2,3);
        }
       else if((this.x >= 400&& this.x <= 450) && (this.y >=20 && this.y<=50 ))
        {   this.x = 425;
            this.y = 390;
            this.validator(2,1,3);
        }
       else if((this.x >= 640 && this.x<=690) && (this.y >=20 && this.y<=50)){
             this.x = 425;
             this.y = 390;
             this.validator(3,1,2);
            }
    }
    this.validator = function(optionSelected,a,b){
        this.random= Math.floor(Math.random()*3)+1;
            switch(this.random){
                case a:document.getElementById('computer').innerHTML=1+parseInt(document.getElementById('computer').innerText);
                       break;
                case b:document.getElementById('player').innerHTML=1+parseInt(document.getElementById('player').innerText);
                       break;
            }
         }
        // else if(optionSelected == 2){
        //     switch(this.random){
        //         case 1:document.getElementById('player').innerHTML=1+parseInt(document.getElementById('player').innerText);
        //                break;
        //         case 3:document.getElementById('computer').innerHTML=1+parseInt(document.getElementById('computer').innerText);
        //                break;
        //     }
        // }
        // else if(optionSelected == 3)
        // {
        //     switch(this.random){
        //         case 1:document.getElementById('player').innerHTML=1+parseInt(document.getElementById('player').innerText);
        //                break;
        //         case 2:document.getElementById('computer').innerHTML=1+parseInt(document.getElementById('computer').innerText);
        //                break;
        //     }  
        // }
    }
}

let option = new Options();

addEventListener("keydown",function(event){
    option.keyPress(event.keyCode);     
   })



//    let points = document.getElementById('player').innerText;
//    document.getElementById('player').innerHTML=1+parseInt(points);