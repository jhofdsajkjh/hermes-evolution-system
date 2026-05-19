# 代码基因索引

## 游戏开发基因 (来自 steel-assault-game)

| 基因 | 文件 | 用途 |
|------|------|------|
| Canvas 初始化 | `genes/canvas-init.js` | HTML5 Canvas 2D 基础设置 |
| 游戏循环 | `genes/game-loop.js` | requestAnimationFrame 主循环 |
| 键盘输入 | `genes/input-handler.js` | 多键同时按下处理 |
| 实体基类 | `genes/entity-base.js` | 玩家/敌人/子弹基类 |
| AABB 碰撞 | `genes/collision-aabb.js` | 矩形碰撞检测 |
| 敌人生成 | `genes/enemy-spawn.js` | 波次生成系统 |
| 道具系统 | `genes/powerup.js` | 道具收集和效果 |
| 地图解析 | `genes/level-parser.js` | 字符地图转实体 |

## 使用方式

```javascript
import { gameLoop } from './genes/game-loop.js';
import { Entity } from './genes/entity-base.js';

// 快速启动游戏
requestAnimationFrame(gameLoop);
```

## 演进记录

- 2026-05-19: 从 steel-assault-game 提取第一代 8 个基因
