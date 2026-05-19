/**
 * Gene: 游戏实体基类
 * 来源: steel-assault-game/game.js
 * 用途: 玩家/敌人/子弹等实体
 */
class Entity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = 0;
        this.vy = 0;
        this.alive = true;
        this.removed = false;
    }
    
    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
    }
    
    getBounds() {
        return {
            x: this.x,
            y: this.y,
            w: this.width,
            h: this.height
        };
    }
    
    collides(other) {
        const a = this.getBounds();
        const b = other.getBounds();
        return a.x < b.x + b.w && a.x + a.w > b.x &&
               a.y < b.y + b.h && a.y + a.h > b.y;
    }
    
    remove() {
        this.removed = true;
        this.alive = false;
    }
}
