/**
 * Gene: 游戏循环模式
 * 来源: steel-assault-game/game.js
 * 用途: requestAnimationFrame 游戏主循环
 */
let lastTime = 0;
let accumulator = 0;
const TICK_RATE = 1/60;
const FIXED_DT = TICK_RATE;

function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;
    accumulator += dt;
    
    while (accumulator >= FIXED_DT) {
        update(FIXED_DT);
        accumulator -= FIXED_DT;
    }
    
    render();
    requestAnimationFrame(gameLoop);
}

// 启动
requestAnimationFrame(gameLoop);
