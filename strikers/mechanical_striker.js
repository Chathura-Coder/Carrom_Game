window.customStrikerRender = function(ctx, c) {
  // A mechanical gear-like striker
  ctx.beginPath();
  ctx.arc(0, 0, c.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#334155";
  ctx.fill();
  
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#94a3b8";
  ctx.stroke();

  // inner polygon
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = Math.cos(angle) * (c.radius * 0.7);
    const y = Math.sin(angle) * (c.radius * 0.7);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "#e2e8f0";
  ctx.fill();
  ctx.stroke();

  // core piece
  ctx.beginPath();
  ctx.arc(0, 0, c.radius * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = "#ef4444";
  ctx.fill();
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#ef4444";
  
  // gloss
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.arc(-5, -5, 4, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.fill();
};
