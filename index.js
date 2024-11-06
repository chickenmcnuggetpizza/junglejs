/**
 * @type HTMLCanvasElement
 */
const canvas = document.getElementById("canvas");
/**
 * @type CanvasRenderingContext2D
 */
var ctx = canvas.getContext("2d");

ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)
