window.customCoinRender = function(ctx, c) {
  // A glowing neon coin style
  ctx.beginPath();
  ctx.arc(0, 0, c.radius, 0, Math.PI * 2);
  
  if (c.type === "white") {
    ctx.fillStyle = "#22d3ee";
    ctx.shadowColor = "#06b6d4";
  } else if (c.type === "black") {
    ctx.fillStyle = "#c084fc";
    ctx.shadowColor = "#a855f7";
  } else if (c.type === "queen") {
    ctx.fillStyle = "#facc15";
    ctx.shadowColor = "#eab308";
  }
  
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.shadowBlur = 0;
  
  ctx.beginPath();
  ctx.arc(0, 0, c.radius * 0.5, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fill();
  
  // Crosshair in middle
  ctx.beginPath();
  ctx.moveTo(-c.radius*0.3, 0);
  ctx.lineTo(c.radius*0.3, 0);
  ctx.moveTo(0, -c.radius*0.3);
  ctx.lineTo(0, c.radius*0.3);
  ctx.strokeStyle = "rgba(255,255,255,0.8)";
  ctx.lineWidth = 2;
  ctx.stroke();
};
