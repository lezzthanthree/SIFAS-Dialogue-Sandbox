import loadImage from "./loadImage";

async function drawSprites(ctx, sprite, data) {
    const bodyImageSrc = `/img/sprites/${sprite.character}/${sprite.costume}_0.png`;
    const expressionImageSrc = `/img/sprites/${sprite.character}/${sprite.costume}_1.png`;

    if (sprite.options.hidden) {
        console.warn(`${sprite["layer-name"]} is hidden.`);
        return;
    }
    const bodyImage = await loadImage(bodyImageSrc);
    const expressionImage = await loadImage(expressionImageSrc);

    const bodyWidth = bodyImage.width + sprite.options.scale;
    const bodyHeight =
        (bodyImage.width + sprite.options.scale) *
        (bodyImage.height / bodyImage.width);

    const bodyXPos =
        ctx.canvas.width / 2 - bodyImage.width / 2 + sprite.options.x;
    const bodyYPos = sprite.options.y;

    const eyePos = data.expression.eye[sprite.expression.eye];
    const mouthPos = data.expression.mouth[sprite.expression.mouth];

    const eyeOffset = data.offset[bodyImage.width].eye;
    const mouthOffset = data.offset[bodyImage.width].mouth;

    const eyeSize = data.size.eye;
    const mouthSize = data.size.mouth;

    const eyeWidth = bodyWidth * (eyeSize[0] / bodyImage.width);
    const eyeHeight = bodyHeight * (eyeSize[1] / bodyImage.height);

    const mouthWidth = bodyWidth * (mouthSize[0] / bodyImage.width);
    const mouthHeight = bodyHeight * (mouthSize[1] / bodyImage.height);

    const xEyePos =
        ctx.canvas.width / 2 -
        bodyImage.width / 2 +
        sprite.options.x +
        (eyeOffset[0] / eyeSize[0]) * eyeWidth;

    const yEyePos = (eyeOffset[1] / eyeSize[1]) * eyeHeight + sprite.options.y;

    const xMouthPos =
        ctx.canvas.width / 2 -
        bodyImage.width / 2 +
        sprite.options.x +
        (mouthOffset[0] / mouthSize[0]) * mouthWidth;

    const yMouthPos =
        (mouthOffset[1] / mouthSize[1]) * mouthHeight + sprite.options.y;

    ctx.drawImage(
        bodyImage,
        0,
        0,
        bodyImage.width,
        bodyImage.height,
        bodyXPos,
        bodyYPos,
        bodyWidth,
        bodyHeight
    );

    if (eyePos) {
        ctx.drawImage(
            expressionImage,
            eyePos[0],
            eyePos[1],
            eyeSize[0],
            eyeSize[1],
            xEyePos,
            yEyePos,
            eyeWidth,
            eyeHeight
        );
    }

    if (mouthPos) {
        ctx.drawImage(
            expressionImage,
            mouthPos[0],
            mouthPos[1],
            mouthSize[0],
            mouthSize[1],
            xMouthPos,
            yMouthPos,
            mouthWidth,
            mouthHeight
        );
    }

    console.info(`${sprite["layer-name"]} drawn!`);
}

export default drawSprites;
