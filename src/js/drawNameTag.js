import loadImage from "./loadImage";

async function drawNameTag(ctx, nameTagProp) {
    if (nameTagProp.hidden) {
        console.warn("Name Tag is hidden.");
        return;
    }
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

    ctx.shadowColor = "rgba(0,0,0,0.4)";
    ctx.font = "35px FOT-Skip Std";
    ctx.fillStyle = "#484848";
    ctx.textBaseline = "bottom";
    ctx.fillText(nameTagProp.name, 290, 770);

    ctx.shadowColor = "rgba(0,0,0,0)";

    const iconSrc = `/img/char_icon/${nameTagProp.icon}.png`;
    const icon = await loadImage(iconSrc);

    ctx.drawImage(icon, 0, 0, icon.width, icon.height, 230, 730, 50, 40);

    console.info("Name Tag drawn!");
}

export default drawNameTag;
