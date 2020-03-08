const Canvas = require("canvas");
const { formatVariable, applyText } = require("../../utils/functions");

module.exports = class Generate {

    constructor(){
    /* INFO */
    this.text = "wanted";
    this.background = `${__dirname}/../../assets/img/default-avatar.png`;
    /* COLOR */
    this.colorText = "#ff0000";
    this.colorBox = "#fff";
    /* OPACITY */
    this.opacityBow = "0.4";
   }
  setText(value) {
  this.text = value;
   return this;
}
  setBackground(value) {
   this.background = value;
    return this;
 }
 setColor(variable, value) {
 const formattedVariable = formatVariable("color", variable);
  if (this[formattedVariable]) this[formattedVariable] = value;
   return this;
 }
 setOpacity(variable, value) {
  const formattedVariable = formatVariable("opacity", variable);
   if (this[formattedVariable]) this[formattedVariable] = value;
     return this;
  }
  async toAttachment() {
   const canvas = Canvas.createCanvas(1024, 1024);
   const ctx = canvas.getContext("2d");
   const text = this.text;
   let background = await Canvas.loadImage(this.backgroundImage);
   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   ctx.fillRect(341,0,1024,341);
   ctx.fillStyle = this.colorBox
   ctx.globalAlpha = this.opacityBox
   return canvas;
 }
}