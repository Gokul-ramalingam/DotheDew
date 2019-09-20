class game{
  constructor(){
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.bg_image = new  image();
    this.bg_image.src = 'images/background'
    this.rock_image = new Image();
    this.rock_image.src = 'images/rock.png';
    this.paper_image = new Image();
    this.paper_image.src = 'images/paper.png';
    this.scissor_image = new Image();
    this.scissor_image.src = 'images/scissor.png';
    this.point_image = new Image();
    this.point_image.src = 'images/point.png';
    this.x = 230;
    this.y = 300;
    onload=()=>{
      this.ctx.drawImage(this.bg_image, 0, 0, 600, 500);
      this.ctx.drawImage(this.rock_image, 20, 20, 170, 130);
      this.ctx.drawImage(this.paper_image, 210, 20, 170, 130);
      this.ctx.drawImage(this.scissor_image, 400, 20, 170, 130);
      this.ctx.drawImage(this.point_image, this.x, this.y, 170, 150);
    }
    this.move = function(event) {
          if(event== 37) {//LEFT
            this.x = this.x - 5;
          } else if(event == 38) {//UP
            this.y = this.y - 5;
          } else if(event ==39) {//RIGHT
            this.x = this.x + 5;
          } else if(event== 40) {//DOWN
            this.y = this.y + 5;
          }
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.drawImage(this.rock_image, 20, 20, 170, 130);
          this.ctx.drawImage(this.paper_image, 210, 20, 170, 130);
          this.ctx.drawImage(this.scissor_image, 400, 20, 170, 130);
          this.ctx.drawImage(this.point_image, this.x, this.y, 170, 150);
  }
}
}

let object = new game();
addEventListener("keydown", function(e){
  object.move(e.keyCode);
  // console.log("here");
});