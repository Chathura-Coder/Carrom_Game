window.customStrikerEffect = function(ctx, c, time) {
  const glow = Math.sin(time * 5) * 5 + 10;
  ctx.shadowBlur = glow;
  ctx.shadowColor = "#38bdf8";
  
  ctx.beginPath();
  ctx.arc(0, 0, c.radius + 6, 0, Math.PI * 2);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#7dd3fc";
  ctx.stroke();
  
  ctx.rotate(-time * 4);
  ctx.beginPath();
  for(let i=0; i<4; i++) {
     ctx.rotate(Math.PI / 2);
     ctx.moveTo(c.radius + 10, 0);
     ctx.lineTo(c.radius + 18, 0);
  }
  ctx.strokeStyle = "#e0f2fe";
  ctx.lineWidth = 4;
  ctx.stroke();
};
