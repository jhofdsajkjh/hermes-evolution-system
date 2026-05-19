/**
 * Gene: 敌人生成系统
 * 来源: steel-assault-game/game.js
 * 用途: 波次生成敌人
 */
class EnemySpawner {
    constructor(waveConfig) {
        this.waves = waveConfig;  // [{count, interval, types}]
        this.currentWave = 0;
        this.spawnTimer = 0;
        this.enemiesInWave = 0;
    }
    
    update(dt, spawnCallback) {
        if (this.currentWave >= this.waves.length) return;
        
        const wave = this.waves[this.currentWave];
        this.spawnTimer += dt;
        
        if (this.spawnTimer >= wave.interval && this.enemiesInWave < wave.count) {
            spawnCallback(wave.types[Math.floor(Math.random() * wave.types.length)]);
            this.enemiesInWave++;
            this.spawnTimer = 0;
        }
        
        if (this.enemiesInWave >= wave.count && activeEnemies === 0) {
            this.currentWave++;
            this.enemiesInWave = 0;
        }
    }
}
