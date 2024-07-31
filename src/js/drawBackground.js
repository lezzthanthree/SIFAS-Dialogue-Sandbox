async function drawBackground(ctx, background) {
    if (!background || !background.img) {
        console.warn("No background found!");
        return;
    }
    const img = background.img;

    const hRatio = ctx.canvas.width / img.width;
    const vRatio = ctx.canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const scaledWidth = img.width * ratio;
    const scaledHeight = img.height * ratio;

    const x = (ctx.canvas.width - scaledWidth) / 2;
    const y = (ctx.canvas.height - scaledHeight) / 2;

    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

    console.info("Background drawn!");
}

export default drawBackground;
