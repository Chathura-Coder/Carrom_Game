window.customStrikerEffect = function(ctx, c, time) {
  ctx.rotate(time * 3);
  for(let i=0; i<6; i++) {
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(c.radius, 0);
    ctx.quadraticCurveTo(c.radius * 1.3, c.radius * 0.4, c.radius * 1.5, 0);
    ctx.strokeStyle = `hsl(${(time * 100 + i * 60) % 360}, 100%, 70%)`;
    ctx.lineWidth = 3;
    ctx.shadowBlur = 10;
    ctx.shadowColor = ctx.strokeStyle;
    ctx.stroke();
  }
};
