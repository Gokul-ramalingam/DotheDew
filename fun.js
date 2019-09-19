class game{
  constructor(){
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.rock_image = new Image();
    this.rock_image.src = 'images/rock.png';
    this.paper_image = new Image();
    this.paper_image.src = 'images/paper.png';
    this.scissor_image = new Image();
    this.scissor_image.src = 'images/scissor.png';
    this.point_image = new Image();
    this.point_image.src = 'images/point.png';
    onload=()=>{
      this.ctx.drawImage(this.rock_image, 20, 20, 170, 130);
      this.ctx.drawImage(this.paper_image, 210, 20, 170, 130);
      this.ctx.drawImage(this.scissor_image, 400, 20, 170, 130);
      this.ctx.drawImage(this.point_image, 230, 300, 170, 150);
    }
  }
}
let object = new game();


// function press(event) {
//     if(event== 37) {//LEFT
//       x = x - 1;
//     } else if(event == 38) {//UP
//       y = y - 1;
//     } else if(event ==39) {//RIGHT
//       x = x + 1;
//     } else if(event== 40) {//DOWN
//       y = y + 1;
//     }
//     draw();
//   }
//   function draw(){
//     ctx.drawImage(point_image, 230, 300, 170, 150);
//     }
//     addEventListener("keydown", function(){
//         press(event.keyCode);
        
//     });