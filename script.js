const player = document.getElementById("player");
const coin = document.getElementById("coin");

const scoreText = document.getElementById("score");
const levelText = document.getElementById("level");
const timeText = document.getElementById("time");

let playerX = 170;
let coinX = Math.random() * 370;
let coinY = 0;

let score = 0;
let level = 1;
let time = 60;
let speed = 3;

// Menggerakkan pemain
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft" && playerX > 0) {
        playerX -= 20;
    }

    if (e.key === "ArrowRight" && playerX < 340) {
        playerX += 20;
    }

    player.style.left = playerX + "px";
});

// Update game
function updateGame() {
    coinY += speed;

    if (coinY > 400) {
        coinY = 0;
        coinX = Math.random() * 370;
    }

    // Tangkap koin
    if (
        coinY >= 360 &&
        coinX > playerX - 30 &&
        coinX < playerX + 60
    ) {
        score++;
        scoreText.textContent = score;

        coinY = 0;
        coinX = Math.random() * 370;

        if (score % 5 === 0) {
            level++;
            levelText.textContent = level;
            speed++;
        }
    }

    coin.style.top = coinY + "px";
    coin.style.left = coinX + "px";
}

// Jalankan game
setInterval(updateGame, 20);

// Timer
const timer = setInterval(function() {
    time--;
    timeText.textContent = time;

    if (time <= 0) {
        clearInterval(timer);
        alert("Game Over!\nSkor Kamu: " + score);
        location.reload();
    }
}, 1000);
