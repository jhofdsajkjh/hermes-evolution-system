/**
 * Gene: 键盘输入处理
 * 来源: steel-assault-game/game.js
 * 用途: 多键同时按下处理
 */
const keys = new Set();

window.addEventListener('keydown', e => {
    keys.add(e.code);
    // 防止方向键滚动页面
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)) {
        e.preventDefault();
    }
});

window.addEventListener('keyup', e => {
    keys.delete(e.code);
});

// 使用: if (keys.has('KeyW') || keys.has('ArrowUp')) { ... }
