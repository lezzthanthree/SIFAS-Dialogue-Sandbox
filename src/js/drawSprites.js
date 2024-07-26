async function drawSprites(ctx, sprite, data) {
    if (sprite.options.hidden) {
        console.warn(`${sprite["layer-name"]} is hidden.`);
        return;
    }
    const bodyImage = sprite.bodyImage;
    const expressionImage = sprite.expressionImage;

    const bodyWidth = bodyImage.width + sprite.options.scale;
    const bodyHeight =
        (bodyImage.width + sprite.options.scale) *
        (bodyImage.height / bodyImage.width);

    const bodyXPos =
        ctx.canvas.width / 2 - bodyImage.width / 2 + sprite.options.x;
    const bodyYPos = sprite.options.y;

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

    if (expressionImage == null) {
        return;
    }

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

    console.info(`${sprite.layerName} drawn!`);
}

export default drawSprites;
