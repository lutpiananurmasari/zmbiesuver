const game = document.getElementById("game");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const scoreText = document.getElementById("score");
const levelText = document.getElementById("level");
const timeText = document.getElementById("time");
const healthText = document.getElementById("health");

const gameOver = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");

const shootSound = document.getElementById("shootSound");
const hitSound = document.getElementById("hitSound");
const levelSound = document.getElementById("levelSound");
const gameOverSound = document.getElementById("gameOverSound");

let score = 0;
let level = 1;
let health = 100;
let time = 120;

let keys = {};

let p1 = {
    x: 150,
    y: 400
};

let p2 = {
    x: 250,
    y: 400
};

const speed = 5;

let enemies = [];
let bullets = [];

document.addEventListener("keydown", function(e){

    keys[e.key] = true;

    if(e.key==" "){
        shoot(p1);
    }

    if(e.key=="Enter"){
        shoot(p2);
    }

});

document.addEventListener("keyup", function(e){

    keys[e.key]=false;

});

function updatePlayer(){

    if(keys["w"]) p1.y-=speed;
    if(keys["s"]) p1.y+=speed;
    if(keys["a"]) p1.x-=speed;
    if(keys["d"]) p1.x+=speed;

    if(keys["ArrowUp"]) p2.y-=speed;
    if(keys["ArrowDown"]) p2.y+=speed;
    if(keys["ArrowLeft"]) p2.x-=speed;
    if(keys["ArrowRight"]) p2.x+=speed;

    p1.x=Math.max(0,Math.min(950,p1.x));
    p1.y=Math.max(0,Math.min(550,p1.y));

    p2.x=Math.max(0,Math.min(950,p2.x));
    p2.y=Math.max(0,Math.min(550,p2.y));

    player1.style.left=p1.x+"px";
    player1.style.top=p1.y+"px";

    player2.style.left=p2.x+"px";
    player2.style.top=p2.y+"px";

}

function shoot(player){

    shootSound.currentTime=0;
    shootSound.play();

    const bullet=document.createElement("div");

    bullet.className="bullet";

    bullet.style.left=(player.x+20)+"px";
    bullet.style.top=(player.y)+"px";

    game.appendChild(bullet);

    bullets.push(bullet);

}
