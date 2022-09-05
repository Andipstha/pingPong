
var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function()
{
    console.log("Hellow World!");
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function()
    {
        moveEverything();
        drawEverything();
    },1000/framesPerSecond);
}
function moveEverything()
{
    ballX = ballX + ballSpeedX;
    if(ballX < 0)
    {
        ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width)
    {
        ballSpeedX = -ballSpeedX;
    }
}
function drawEverything()
{
    //next line blanks out the screen with black
    colorRect(0,0,canvas.width,canvas.height,'black');

    //this is left player paddle
    colorRect(0,210,10,100, 'White');

    //next line draws the ball
    colorCircle(ballX, 150, 10, 'red');
    
}
function colorCircle(centerX, centerY, radius, drawColor)
{
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, 10, 0,Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX,topY, width,height, drawColor)
{
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY, width,height);
}