const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
    x:100,
    y:100,
    size:30,
    speed:5
};

function drawPlayer(){
    ctx.fillStyle="blue";
    ctx.fillRect(player.x,player.y,player.size,player.size);
}

function game(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawPlayer();

    requestAnimationFrame(game);
}

game();
