async function drawBackground(ctx, background) {
    if (!background) {
        console.warn("No background found!")
        return
    }
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

    console.info("Background drawn!");
}

export default drawBackground;
