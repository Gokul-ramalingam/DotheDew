class Options{
    constructor(){
    this.canvas = document.getElementById('game');
    this.canvas.width = 570;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle="#7DEEFE"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.rockImage =  new Image();
    this.paperImage  = new Image();
    this.scissorImage = new Image();
    this.selectImage = new Image();
    this.rockImage.src = 'images/rock.png';
    this.paperImage.src = 'images/paper.png';
    this.scissorImage.src = 'images/scissor.png';
    this.selectImage.src = 'images/pikachu.png';
    this.random = 0;
    this.x = 220;
    this.y = 300;
    this.pokePick = new Audio("pickup.mp3");
    this.pokePick.volume = 0.8;
    onload=()=>{
        this.locationSpecifier();
    } 

    this.keyPress = function(e){
     e==37?this.x-=5:e==38?this.y-=5:e==39?this.x+=5:this.y+=5;
       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
       this.locationSpecifier();
       
       if((this.x >= 0 && this.x<=70) && (this.y >=20 && this.y<=50 ))
       {  
          this.pokePick.play();
          this.reset();
          this.validator(1,2,3);
        }
       else if((this.x >= 200&& this.x <= 250) && (this.y >=20 && this.y<=50 ))
        {   
            this.pokePick.play();
            this.reset();
            this.validator(2,3,1);
        }
       else if((this.x >= 430 && this.x<=470) && (this.y >=20 && this.y<=50)){
            this.pokePick.play();
            this.reset();
            this.validator(3,1,2);
            }
    }
       this.reset = function(){
       this.x = 220;
       this.y = 300;
    //    this.pokePick.pause();
     }

    this.validator = function(optionSelected,a,b){
        this.random = generateRandomNumber(optionSelected);
        this.imageModifier(this.random);
            switch(this.random){
                case a:document.getElementById('computer').innerHTML=1+parseInt(document.getElementById('computer').innerText);
                       break;
                case b:document.getElementById('player').innerHTML=1+parseInt(document.getElementById('player').innerText);
                       break;
            }
            
            if(parseInt(document.getElementById('computer').innerText) === parseInt(localStorage.getItem('winScore')))
            {  
                  this.storeResult('loss');
            }
            else if(parseInt(document.getElementById('player').innerText) === parseInt(localStorage.getItem('winScore')))
               {
                   this.storeResult('win');
               }
         }
         this.locationSpecifier = function(){
            this.ctx.drawImage(this.rockImage,10,25,100,100);
            this.ctx.drawImage(this.paperImage,220,25,100,100);
            this.ctx.drawImage(this.scissorImage,450,25,100,100);
            this.ctx.drawImage(this.selectImage,this.x,this.y,100,100);
         }
         this.storeResult=function(result){
            localStorage.setItem('result',result);
            location.href="last.html"; 
         }
         this.imageModifier = function(randomNumber){
             console.log(randomNumber);
           randomNumber===1?document.getElementById("random").src="images/rock.png":
           randomNumber===2?document.getElementById("random").src="images/paper.png":
           document.getElementById("random").src="images/scissor.png";
         }
    }
}

let option = new Options();

addEventListener("keydown",function(event){
    option.keyPress(event.keyCode);     
   })


    let generateRandomNumber = function(optionSelected){
    let rand = Math.floor(Math.random()*3)+1;
    return rand === optionSelected? generateRandomNumber(optionSelected) : rand;
}
