window.customStrikerEffect = function(ctx, c, time) {
  ctx.rotate(time * 5);
  ctx.beginPath();
  for(let i=0; i<4; i++) {
    ctx.moveTo(c.radius + 2, 0);
    ctx.lineTo(c.radius + 12, c.radius * 0.3);
    ctx.lineTo(c.radius + 25, 0);
    ctx.lineTo(c.radius + 12, -c.radius * 0.3);
    ctx.fillStyle = "#e2e8f0";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#e2e8f0";
    ctx.fill();
    ctx.rotate(Math.PI / 2);
  }
};
