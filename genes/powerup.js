/**
 * Gene: 道具系统
 * 来源: steel-assault-game/game.js
 * 用途: 道具收集和效果
 */
const POWERUP_TYPES = {
    RAPID_FIRE: { duration: 10, effect: () => player.fireDelay = 140 },
    SHIELD: { duration: 5, effect: () => player.invincible = true },
    SCORE_2X: { duration: 15, effect: () => scoreMultiplier = 2 },
    EXTRA_LIFE: { effect: () => lives++ }
};

function applyPowerup(type) {
    const powerup = POWERUP_TYPES[type];
    if (powerup.duration) {
        // 设置倒计时
        setTimeout(() => powerup.effect(), 0);
        setTimeout(() => powerup.effect恢复(), powerup.duration * 1000);
    } else {
        powerup.effect();
    }
}
