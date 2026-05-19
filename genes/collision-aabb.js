/**
 * Gene: AABB 碰撞检测
 * 来源: steel-assault-game/game.js
 * 用途: 矩形碰撞检测
 */
function aabbCollision(a, b) {
    // a, b = {x, y, width, height}
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

// 使用: if (aabbCollision(player.getBounds(), enemy.getBounds())) { ... }
