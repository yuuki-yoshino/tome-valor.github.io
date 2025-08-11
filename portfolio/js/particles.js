class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = `hsl(51, 100%, ${Math.random() * 20 + 70}%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 壁に当たったら反転
        if (this.x >= window.innerWidth || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y >= window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

let particles = [];
const canvas = document.createElement('canvas');
document.querySelector('.particles-container').appendChild(canvas);
const ctx = canvas.getContext('2d');

// パーティクルの数を固定
const PARTICLE_COUNT = 60;

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = []; // 既存のパーティクルをクリア

    // 固定数のパーティクルを生成
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
    });
}

// 初期化
init();
animate();

// リサイズ時の処理
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // パーティクルの位置をリセット
    particles.forEach(particle => {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
    });
});
