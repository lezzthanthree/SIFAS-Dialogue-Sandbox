const drawText = async (ctx, text, experimental) => {
    if (text.hidden) {
        console.warn("Text box is hidden.");
        return;
    }
    const fontOffset = parseInt(experimental.fontOffset);
    const textFontSize = parseInt(text.fontSize);
    const gradient = ctx.createLinearGradient(0, 750, 0, 950);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.11, "rgba(255, 255, 255, 0.85)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 750, 1820, 300);
    let texts = text.dialogue.split("\n");
    ctx.shadowColor = experimental.shadow ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)";
    for (let i = 0; i < texts.length; i++) {
        ctx.font = `${textFontSize}px FOT-Skip Std`;
        ctx.fillStyle = "#484848";
        ctx.textBaseline = "hanging";
        ctx.fillText(
            texts[i],
            315,
            820 + fontOffset + (65 + (textFontSize - 35))  * i 
        );
    }

    ctx.shadowColor = "rgba(0,0,0,0.4)";
    const ctc1 = new Path2D();
    ctx.fillStyle = "#ffffff";
    ctc1.moveTo(1545, 935);
    ctc1.lineTo(1567.5, 970);
    ctc1.lineTo(1590, 935);
    ctx.fill(ctc1);

    ctx.shadowColor = "rgba(0,0,0,0)";
    const ctc2 = new Path2D();
    ctx.fillStyle = "#fa8291";
    ctc2.moveTo(1549, 937);
    ctc2.lineTo(1567.5, 966);
    ctc2.lineTo(1586, 937);
    ctx.fill(ctc2);

    console.info("Text box drawn!");
};

export default drawText;
