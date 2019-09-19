var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// rock is displayed
rock_image = new Image();
rock_image.src = 'images/rock.png';
rock_image.onload = function(){
ctx.drawImage(rock_image, 20, 20, 170, 130);
}
// this image for paper
paper_image = new Image();
paper_image.src = 'images/paper.png';
paper_image.onload = function(){
ctx.drawImage(paper_image, 210, 20, 170, 130);
}
// this image for scissor
scissor_image = new Image();
scissor_image.src = 'images/scissor.png';
scissor_image.onload = function(){
ctx.drawImage(scissor_image, 400, 20, 170, 130);
}
// this for point to above images
point_image = new Image();

point_image.src = 'images/point.png';
point_image.onload = function(){
ctx.drawImage(point_image, 230, 300, 170, 150);
}

function press(event) {
    if(event== 37) {//LEFT
      x = x - 1;
    } else if(event == 38) {//UP
      y = y - 1;
    } else if(event ==39) {//RIGHT
      x = x + 1;
    } else if(event== 40) {//DOWN
      y = y + 1;
    }
    draw();
  }
  function draw(){
    ctx.drawImage(point_image, 230, 300, 170, 150);
    }
    addEventListener("keydown", function(){
        press(event.keyCode);
        
    });