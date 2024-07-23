function drawBackground(ctx, background) {
    const hRatio = ctx.canvas.width / background.width;
    const vRatio = ctx.canvas.height / background.height;
    const ratio = Math.max(hRatio, vRatio);

    ctx.drawImage(
        background,
        ctx.canvas.width / 2 - background.width / 2 - 10,
        0,
        background.width * ratio,
        background.height * ratio
    );
}

export default drawBackground;
