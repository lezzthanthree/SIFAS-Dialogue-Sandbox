async function drawBackground(ctx, background) {
    if (!background) {
        console.warn("No background found!");
        return;
    }

    const hRatio = ctx.canvas.width / background.width;
    const vRatio = ctx.canvas.height / background.height;
    const ratio = Math.max(hRatio, vRatio);

    const scaledWidth = background.width * ratio;
    const scaledHeight = background.height * ratio;

    const x = (ctx.canvas.width - scaledWidth) / 2;
    const y = (ctx.canvas.height - scaledHeight) / 2;

    ctx.drawImage(
        background,
        x,
        y,
        scaledWidth,
        scaledHeight
    );

    console.info("Background drawn!");
}

export default drawBackground;
