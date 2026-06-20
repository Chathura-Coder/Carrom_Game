window.customStrikerEffect = function(ctx, c, time) {

    const pulse = Math.sin(time * 6) * 0.15 + 1;

    // ===== OUTER ENERGY RING =====
    ctx.save();
    ctx.shadowBlur = 25;
    ctx.shadowColor = "#00e5ff";

    ctx.beginPath();
    ctx.arc(0, 0, (c.radius + 10) * pulse, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(0,229,255,0.8)";
    ctx.stroke();
    ctx.restore();


    // ===== ROTATING NEON ARCS =====
    ctx.save();
    ctx.rotate(time * 2);

    for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(
            0,
            0,
            c.radius + 15,
            i * 2.1,
            i * 2.1 + 0.9
        );

        ctx.lineWidth = 5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#7df9ff";
        ctx.strokeStyle = "#7df9ff";
        ctx.stroke();
    }
    ctx.restore();


    // ===== ORBITING PARTICLES =====
    for(let i = 0; i < 8; i++) {

        const angle = time * 3 + (i * Math.PI * 2 / 8);
        const orbit = c.radius + 20;

        const x = Math.cos(angle) * orbit;
        const y = Math.sin(angle) * orbit;

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);

        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#00ffff";
        ctx.fill();
    }


    // ===== INNER ENERGY CORE =====
    const core = ctx.createRadialGradient(
        0, 0, 0,
        0, 0, c.radius
    );

    core.addColorStop(0, "#ffffff");
    core.addColorStop(0.4, "#67e8f9");
    core.addColorStop(1, "rgba(0,255,255,0)");

    ctx.beginPath();
    ctx.arc(0, 0, c.radius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = core;
    ctx.fill();


    // ===== SECOND ROTATING RING =====
    ctx.save();
    ctx.rotate(-time * 4);

    for(let i = 0; i < 6; i++) {

        const a = i * Math.PI / 3;

        ctx.beginPath();
        ctx.moveTo(
            Math.cos(a) * (c.radius + 12),
            Math.sin(a) * (c.radius + 12)
        );

        ctx.lineTo(
            Math.cos(a) * (c.radius + 22),
            Math.sin(a) * (c.radius + 22)
        );

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    ctx.restore();
};
