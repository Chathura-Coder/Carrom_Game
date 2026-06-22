window.customStrikerEffect = function(ctx, c, time) {
    // ===== INNER CORE =====
    ctx.beginPath();
    ctx.arc(0, 0, c.radius * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = "#6a0dad";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#b984ff";
    ctx.stroke();

    // ===== SEGMENTED OUTER RING =====
    ctx.save();
    ctx.rotate(time * 1.5);
    const segments = 12;
    
    for (let i = 0; i < segments; i++) {
        ctx.beginPath();
        const startAngle = (i * Math.PI * 2) / segments;
        const endAngle = startAngle + ((Math.PI * 2) / segments) * 0.7; // 70% filled, 30% gap
        
        ctx.arc(0, 0, c.radius * 1.2, startAngle, endAngle);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#a020f0";
        ctx.lineCap = "round";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#a020f0";
        ctx.stroke();
    }
    ctx.restore();
};
