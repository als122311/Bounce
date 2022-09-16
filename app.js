let canvas = document.querySelector("#game")
let img = canvas.getContext("2d")

let leftButton = document.querySelector(".left")
let rightButton = document.querySelector(".right")

let  ballX = canvas.width / 2
let  ballY = canvas.height / 2
let ballRadius = 10
let ballSpeedX = 2
let ballSpeedY = -2
let ballColor = "aqua"

let lives = 3
let scores = 0

let rightPressed = false
let leftPressed = false

let bricks = []
let bricksRows = 5
let bricksCols = 6
let bricksWidth = 80
let bricksHeight = 20
let firstBrickX = 50
let firstBrickY = 50
let bricksGap = 6

function createBricks() {
    for (let i = 0; i < bricksRows; i++){
        bricks[i] = []
        for (let j = 0; j < bricksCols; j++) {
            bricks[i][j] = {
                brickX: firstBrickX + (bricksWidth + bricksGap) * j,
                brickY: firstBrickY + (bricksHeight + bricksGap) * i
            }
            let random = Math.floor(Math.random() * 4)
            switch (random) {
                case 0:
                    bricks[i][j].lives= 1;
                    bricks[i][j].color ="green";
                    break
                case 1:
                        bricks[i][j].lives = 2;
                        bricks[i][j].color ="yellow";    
                    break

                    case 2:
                    bricks[i][j].lives= 3;
                    bricks[i][j].color ="red";
                    break
                case 3:
                        bricks[i][j].lives = 5;
                        bricks[i][j].color ="purple";    
                    break
                    
            }
        }
    }
}

function drawLives() {
    img.font = "16px Arial"
    img.fillStyle = "black"
    img.fillText("Lives:" + lives, 10, 20)
}

function drawScores() {
    img.font = "16px Arial"
    img.fillStyle = "black"
    img.fillText("Scores:" + scores, canvas.width - 100, 20)
}

document.addEventListener("keydown", function(info) {
if (info.key == "a" || info.key == "Left" || info.key == "ArrowLeft") {
    leftPressed = true     
}
if (info.key == "d" || info.key == "Right" || info.key == "ArrowRight") {
    rightPressed = true
}
if (info.key == "A" || info.key == "Left" || info.key == "ArrowLeft") {
    leftPressed = true
}
if (info.key == "D" || info.key == "Right" || info.key == "ArrowRight") {
    rightPressed = true
}
if (info.key == "ф" || info.key == "Left" || info.key == "ArrowLeft") {
    leftPressed = true                                                                          
}
if (info.key == "в" || info.key == "Right" || info.key == "ArrowRight") {
    rightPressed = true
}
if (info.key == "Ф" || info.key == "Left" || info.key == "ArrowLeft") {
    leftPressed = true
}
if (info.key == "В" || info.key == "Right" || info.key == "ArrowRight") {
    rightPressed = true
}
})

document.addEventListener("keyup", function(info) {
    if (info.key == "ф" || info.key == "Left" || info.key == "ArrowLeft") {
        leftPressed = false                                                                          
    }
    if (info.key == "в" || info.key == "Right" || info.key == "ArrowRight") {
        rightPressed = false
    }
    if (info.key == "Ф" || info.key == "Left" || info.key == "ArrowLeft") {
        leftPressed = false
    }
    if (info.key == "В" || info.key == "Right" || info.key == "ArrowRight") {
        rightPressed = false
    }
    if (info.key == "a" || info.key == "Left" || info.key == "ArrowLeft") {
        leftPressed = false     
    }
    if (info.key == "d" || info.key == "Right" || info.key == "ArrowRight") {
        rightPressed = false
    }
    if (info.key == "A" || info.key == "Left" || info.key == "ArrowLeft") {
        leftPressed = false
    }
    if (info.key == "D" || info.key == "Right" || info.key == "ArrowRight") {
        rightPressed = false
    }
    })

       

    document.addEventListener("mousemove", function (info){
        let dx = info.clientX - canvas.offsetLeft
        if (dx > 0 && dx < canvas.width) {
            troughX = dx - troughWidht / 2
        }
    })

    leftButton.addEventListener("touchstart", function() {
        leftPressed = true
    })

    
    leftButton.addEventListener("touchhend", function() {
        leftPressed = false
    })

    
    rightButton.addEventListener("touchstart", function() {
        rightPressed = true
    })

    
    rightButton.addEventListener("touchhend", function() {
        rightssPressed = false
    })



let troughWidht = 70
let trougHeight = 10
let troughX = canvas.width / 2 - troughWidht / 2
let troughY = canvas.height - 30
let troughColor = "aqua"

function drawBall() {
    img.beginPath()
    img.arc(ballX,ballY, ballRadius, 0, Math.PI * 2)
    img.fillStyle = ballColor
    img.fill()
    img.closePath()
}

function drawTrough() {
    img.beginPath()
    img.rect(troughX,troughY, troughWidht, trougHeight )
    img.fillStyle = troughColor
    img.fill()
    img.closePath()
}

function drawBricks() {
    for (let i = 0; i < bricksRows; i++) {
        for (let j = 0; j < bricksCols; j++) {
            if (bricks[i][j].lives > 0) {
            img.beginPath()
            img.rect(bricks[i][j].brickX, bricks[i][j].brickY,bricksWidth, bricksHeight)
            img.fillStyle = bricks[i][j].color
            img.fill()
            img.closePath()
            }
        }
    }
}

function draw(){
img.clearRect(0,0, canvas.width, canvas.height)
drawBall()
drawTrough()
drawBricks()
drawLives()
drawScores()
if (ballX + ballSpeedX < ballRadius) {
ballSpeedX = -ballSpeedX
}

if (ballX + ballSpeedX > canvas.width - ballRadius){
   ballSpeedX = -ballSpeedX 
}

if (ballY + ballSpeedY <  ballRadius){
    ballSpeedY = -ballSpeedY 
 }

 if (leftPressed == true) {
    if (troughX > 0){
    troughX -= 5
}
 }

 if (rightPressed == true) {
    if (troughX < canvas.width - troughWidht)
    troughX += 5
 }


 if (ballY - ballRadius > troughY + trougHeight) {
    
    lives--
    if(lives == 0){
    alert("Game Over")
    document.location.reload()
}
      ballX = canvas.width / 2
      ballY = canvas.height / 2
      ballRadius = 10
      do{
      ballSpeedX = Math.round(Math.random() * 2 - 4)
      } while (ballSpeedX == 0)
      ballSpeedY = -2
 }
  else if (ballY + ballRadius > troughY) {
    if (ballX + ballRadius > troughX && ballX - ballRadius < troughX + troughWidht) {
        ballSpeedY = -ballSpeedY
    }    
}

isCollision()
if (scores == bricksCols * bricksRows) {
    alert("You won!!!!")
    document.location.reload()
}

ballX += ballSpeedX
ballY += ballSpeedY
requestAnimationFrame(draw)
}

function isCollision() {
    for (let row = 0;row < bricksRows; row++){
        for (let col = 0; col < bricksCols;col++){
            let b = bricks[row][col]
            if (b.lives > 0) {
                if(ballX > b.brickX && ballX < b.brickX + bricksWidth
                && ballY > b.brickY && ballY < b.brickY + bricksHeight){
                    b.lives--
                    if (b.lives == 0) scores++
                    ballSpeedY = -ballSpeedY
                    switch (b.lives) {
                        case 1:
                            
                            b.color ="green";
                            break
                        case 2:
                                
                                b.color ="yellow";    
                            break
        
                            case 3:
                            
                            b.color ="red";
                            break
                      
                }
            }
        }
    }
}
}


createBricks()
draw()
