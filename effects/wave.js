window.customStrikerEffect = function(ctx, c, time) {
    // ===== YELLOW SUN CORE =====
    ctx.beginPath();
    ctx.arc(0, 0, c.radius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = "#ffff00";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ffff00";
    ctx.fill();

    // ===== WAVY GREEN BORDERS =====
    ctx.save();
    ctx.rotate(-time * 0.8);
    const points = 40;
    
    // Outer Wave
    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const waveOffset = Math.sin(angle * 12 - time * 6) * 5;
        const r = c.radius * 1.3 + waveOffset;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#39ff14";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#39ff14";
    ctx.stroke();

    // Inner Wave (Reverse Sync)
    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const waveOffset = Math.cos(angle * 12 + time * 6) * 3;
        const r = c.radius * 0.95 + waveOffset;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#a3ff00";
    ctx.stroke();
    
    ctx.restore();
};
