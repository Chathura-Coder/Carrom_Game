window.customStrikerEffect = function(ctx, c, time) {

    const waves = 4;

    // Expanding wave rings
    for(let i = 0; i < waves; i++) {

        const offset = (time * 80 + i * 25) % 100;
        const radius = c.radius + 10 + offset;

        const alpha = 1 - offset / 100;

        ctx.beginPath();
        ctx.arc(
            0,
            0,
            radius,
            0,
            Math.PI * 2
        );

        ctx.lineWidth = 3;
        ctx.strokeStyle = `rgba(34,211,238,${alpha})`;

        ctx.shadowBlur = 20;
        ctx.shadowColor = "#22d3ee";

        ctx.stroke();
    }


    // Inner glowing wave
    const pulse = Math.sin(time * 5) * 3;

    const gradient = ctx.createRadialGradient(
        0,0,0,
        0,0,c.radius + pulse
    );

    gradient.addColorStop(0,"rgba(255,255,255,0.8)");
    gradient.addColorStop(0.5,"rgba(34,211,238,0.5)");
    gradient.addColorStop(1,"rgba(34,211,238,0)");

    ctx.beginPath();
    ctx.arc(
        0,
        0,
        c.radius + pulse,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = gradient;
    ctx.fill();


    // Rotating wave lines
    ctx.save();

    ctx.rotate(time * 2);

    for(let i = 0; i < 8; i++) {

        ctx.rotate(Math.PI / 4);

        ctx.beginPath();
        ctx.moveTo(c.radius + 8,0);
        ctx.lineTo(c.radius + 18,0);

        ctx.strokeStyle = "#a5f3fc";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    ctx.restore();
};
