window.customStrikerEffect = function(ctx, c, time) {
  ctx.rotate(time * 2);
  for(let i=0; i<8; i++) {
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, c.radius + 2);
    ctx.lineTo(0, c.radius + 12);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#94a3b8";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#94a3b8";
    ctx.stroke();
  }
};
