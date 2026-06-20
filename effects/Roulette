window.customStrikerEffect = function(ctx, c, time) {

    const radius = c.radius + 8;
    const dots = 12;

    // Outer glow ring
    ctx.save();
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#d946ef";

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#c026d3";
    ctx.stroke();
    ctx.restore();

    // Rotating dots
    ctx.save();
    ctx.rotate(time * 2);

    for (let i = 0; i < dots; i++) {

        const angle = (Math.PI * 2 * i) / dots;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const size = 2 + Math.sin(time * 5 + i) * 0.8;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);

        ctx.fillStyle = "#f5d0fe";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
    }

    ctx.restore();

    // Inner shine ring
    ctx.beginPath();
    ctx.arc(0, 0, c.radius + 2, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.stroke();
};
