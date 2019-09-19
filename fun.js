var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
rock_image = new Image();
rock_image.src = 'rock.png';
rock_image.onload = function(){
ctx.drawImage(rock_image, 20, 20, 170, 130);
}
paper_image = new Image();
paper_image.src = 'paper.png';
paper_image.onload = function(){
ctx.drawImage(paper_image, 210, 20, 170, 130);
}
scissor_image = new Image();
scissor_image.src = 'scissor.png';
scissor_image.onload = function(){
ctx.drawImage(scissor_image, 400, 20, 170, 130);
}
point_image = new Image();
point_image.src = 'point.png';
point_image.onload = function(){
ctx.drawImage(point_image, 230, 300, 170, 150);
}