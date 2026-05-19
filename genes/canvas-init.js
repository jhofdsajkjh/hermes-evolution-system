/**
 * Gene: Canvas 初始化模式
 * 来源: steel-assault-game/game.js
 * 用途: HTML5 Canvas 2D 游戏基础
 */
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// 常量定义
const TILE = 32;
const ROWS = canvas.height / TILE;
const COLS = canvas.width / TILE;
