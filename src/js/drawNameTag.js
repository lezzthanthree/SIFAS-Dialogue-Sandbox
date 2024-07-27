async function drawNameTag(ctx, nameTagProp, experimental) {
    if (!nameTagProp) {
        console.info("Name tag is null! Maybe it's loading or something.");
        return;
    }
    if (nameTagProp.hidden) {
        console.warn("Name Tag is hidden.");
        return;
    }
    const textOffset = parseInt(experimental.textOffset);

    ctx.shadowColor = "rgba(0,0,0,0.4)";

    const nameTagPrimary = new Path2D();
    ctx.fillStyle = nameTagProp.primary;

    nameTagPrimary.moveTo(185, 780);
    nameTagPrimary.lineTo(220, 720);
    nameTagPrimary.lineTo(785, 720);
    nameTagPrimary.lineTo(750, 780);

    nameTagPrimary.closePath();
    ctx.fill(nameTagPrimary);

    ctx.shadowColor = "rgba(0,0,0,0)";
    const nameTagMain = new Path2D();
    ctx.fillStyle = "#ffffff";

    nameTagMain.moveTo(195, 775);
    nameTagMain.lineTo(225, 725);
    nameTagMain.lineTo(775, 725);
    nameTagMain.lineTo(745, 775);

    ctx.fill(nameTagMain);

    const nameTagSecondary = new Path2D();
    ctx.fillStyle = nameTagProp.secondary;

    nameTagSecondary.moveTo(585, 775);
    nameTagSecondary.lineTo(615, 725);
    nameTagSecondary.lineTo(620, 725);
    nameTagSecondary.lineTo(590, 775);

    nameTagSecondary.moveTo(600, 775);
    nameTagSecondary.lineTo(630, 725);
    nameTagSecondary.lineTo(775, 725);
    nameTagSecondary.lineTo(745, 775);

    nameTagSecondary.closePath();
    ctx.fill(nameTagSecondary);

    ctx.shadowColor = experimental.shadow ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)";
    ctx.font = "35px FOT-Skip Std";
    ctx.fillStyle = "#484848";
    ctx.textBaseline = "hanging";
    ctx.fillText(nameTagProp.name, 290, 740 + textOffset);

    ctx.shadowColor = "rgba(0,0,0,0)";

    const icon = nameTagProp.icon;

    if (!icon) {
        // ctx.fillStyle = "#0000ff";
        // const test = new Path2D();
        // test.moveTo(254, 775);
        // test.lineTo(284, 725);
        // test.lineTo(285, 725);
        // test.lineTo(255, 775);
        // ctx.fill(test)
        const nameTagDefault = new Path2D();
        ctx.fillStyle = nameTagProp.primary;
        nameTagDefault.moveTo(225, 775);
        nameTagDefault.lineTo(255, 725);
        nameTagDefault.lineTo(260, 725);
        nameTagDefault.lineTo(230, 775);

        nameTagDefault.moveTo(243, 770);
        nameTagDefault.lineTo(270, 725);
        nameTagDefault.lineTo(274, 725);
        nameTagDefault.lineTo(247, 770);

        ctx.fill(nameTagDefault);

        ctx.beginPath();
        ctx.ellipse(260, 766, 3, 3, 0, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(266, 756, 4, 4, 0, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(272, 745, 5, 5, 0, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        let aspectRatio = icon.width / icon.height;
        let iconWidth = 50;
        let iconHeight = 40;
        let iconRatio = iconWidth / iconHeight;
        let drawWidth, drawHeight;
        if (iconRatio > aspectRatio) {
            drawHeight = iconHeight;
            drawWidth = iconHeight * aspectRatio;
        } else {
            drawWidth = iconWidth;
            drawHeight = iconWidth / aspectRatio;
        }
        var offsetX = (iconWidth - drawWidth) / 2;
        var offsetY = (iconHeight - drawHeight) / 2;
        // drawImageScaled(ctx, icon, 230, 730, 50, 40);
        ctx.drawImage(
            icon,
            230 + offsetX,
            730 + offsetY,
            drawWidth,
            drawHeight
        );
        // ctx.drawImage(icon, 0, 0, icon.width, icon.height, 230, 730, 50, 40);
    }

    console.info("Name Tag drawn!");
}

export default drawNameTag;
