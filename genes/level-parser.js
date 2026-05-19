/**
 * Gene: 关卡地图解析
 * 来源: steel-assault-game/game.js
 * 用途: 字符地图->实体转换
 */
const levelRows = [
    "##########################",
    "#....B.............B.....#",
    "#.####.#####.###.#####.#",
    "#......#...#...#.....#.#",
    // ...
];

function parseLevel(rows) {
    const entities = [];
    for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
            const char = rows[y][x];
            const worldX = x * TILE;
            const worldY = y * TILE;
            
            if (char === '#') entities.push({type: 'wall', x: worldX, y: worldY});
            if (char === 'B') entities.push({type: 'brick', x: worldX, y: worldY});
            // ...
        }
    }
    return entities;
}
