import data from "../../characters.json";
import { useState } from "react";
import loadImage from "../../js/loadImage";
import CostumePicker from "../CostumePicker";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import UploadImageButton from "../UploadImageButton";
const SpriteSidebar = ({ sprites, setSprites, nextLayer, setNextLayer }) => {
    const [currentLayer, setCurrentLayer] = useState(Object.keys(sprites)[0]);
    return (
        <div id="sprite-sidebar">
            <div className="group">
                <h1 className="white align-center">
                    Sprites
                    <i
                        className="bi bi-plus-circle sprite-setting-icon"
                        onClick={async () => {
                            const bodyImage = await loadImage(
                                "/img/sprites/honoka/3c2bnw_0.png"
                            );
                            const expressionImage = await loadImage(
                                "/img/sprites/honoka/3c2bnw_1.png"
                            );
                            setSprites({
                                ...sprites,
                                [`sprite-layer-${nextLayer}`]: {
                                    layerName: `Layer ${nextLayer}: Honoka`,
                                    layerNumber: nextLayer,
                                    character: "honoka",
                                    costume: "3c2bnw",
                                    position: "front",
                                    bodyImage: bodyImage,
                                    expressionImage: expressionImage,
                                    expression: {
                                        eye: 1,
                                        mouth: 1,
                                    },
                                    options: {
                                        x: 0,
                                        y: 0,
                                        scale: 0,
                                        hidden: false,
                                    },
                                },
                            });
                            setCurrentLayer(`sprite-layer-${nextLayer}`);
                            setNextLayer(nextLayer + 1);
                        }}
                    ></i>
                    <i
                        className="bi bi-trash-fill sprite-setting-icon"
                        onClick={() => {
                            if (Object.keys(sprites).length == 1) {
                                alert(
                                    "This is the only layer and cannot be deleted. Use the 'Hidden' option instead."
                                );
                                return;
                            }
                            const newSprites = { ...sprites };
                            delete newSprites[currentLayer];
                            setSprites(newSprites);
                            setCurrentLayer(Object.keys(newSprites)[0]);
                        }}
                    ></i>
                    <i
                        className="bi bi-caret-up-square-fill sprite-setting-icon"
                        onClick={() => {
                            const newLayer =
                                sprites[currentLayer].layerNumber + 1;
                            const character =
                                sprites[currentLayer].character == "custom"
                                    ? "Custom"
                                    : data[sprites[currentLayer].character]
                                          .information.first;

                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    layerName: `Layer ${newLayer}: ${character}`,
                                    layerNumber: newLayer,
                                },
                            });
                        }}
                    ></i>
                    <i
                        className="bi bi-caret-down-square-fill sprite-setting-icon"
                        onClick={() => {
                            const newLayer =
                                sprites[currentLayer].layerNumber - 1;
                            if (newLayer <= 0) {
                                return;
                            }
                            const character =
                                sprites[currentLayer].character == "custom"
                                    ? "Custom"
                                    : data[sprites[currentLayer].character]
                                          .information.first;
                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    layerName: `Layer ${newLayer}: ${character}`,
                                    layerNumber: newLayer,
                                },
                            });
                        }}
                    ></i>
                </h1>

                <select
                    name="sprite-layers"
                    id="sprite-layers"
                    className="sel-small setting w-100"
                    onChange={(e) => {
                        setCurrentLayer(e.target.value);
                    }}
                    value={currentLayer}
                >
                    {Object.keys(sprites)
                        .sort(
                            (a, b) =>
                                sprites[a].layerNumber - sprites[b].layerNumber
                        )
                        .map((s) => {
                            return (
                                <option key={s} value={s}>
                                    {sprites[s].layerName}
                                </option>
                            );
                        })}
                </select>
                <UploadImageButton
                    id="sprite-upload"
                    uploadFunction={async (file) => {
                        const imageSrc = URL.createObjectURL(file);
                        const image = await loadImage(imageSrc);
                        setSprites({
                            ...sprites,
                            [currentLayer]: {
                                ...sprites[currentLayer],
                                layerName: `Layer ${sprites[currentLayer].layerNumber}: Custom`,
                                character: "custom",
                                position: "custom",
                                costume: null,
                                bodyImage: image,
                                expressionImage: null,
                                expression: {
                                    eye: 1,
                                    mouth: 1,
                                },
                            },
                        });
                    }}
                    text={
                        <>
                            <i className="bi bi-upload right-10"></i> Sprite
                        </>
                    }
                    alertMsg="You are uploading a custom sprite. For best experience, upload sprites that are 512x1024 or 1024x1024 in size."
                ></UploadImageButton>
            </div>
            <div className="group">
                <h1 className="white">Character</h1>
                <select
                    name="character-sprite-select"
                    id="character-sprite-select"
                    className="sel-small setting w-100"
                    value={sprites[currentLayer].character}
                    onChange={async (e) => {
                        const newChar = e.target.value;
                        if (newChar == "custom") {
                            document
                                .getElementById("btn-sprite-upload")
                                .click();
                            return;
                        }

                        const firstCostume = data[newChar].costumes[0];
                        const bodyImage = await loadImage(
                            `/img/sprites/${newChar}/${firstCostume}_0.png`
                        );
                        const expressionImage = await loadImage(
                            `/img/sprites/${newChar}/${firstCostume}_1.png`
                        );
                        const layerNumber = sprites[currentLayer].layerNumber;
                        setSprites({
                            ...sprites,
                            [currentLayer]: {
                                ...sprites[currentLayer],
                                layerName: `Layer ${layerNumber}: ${data[newChar].information.first}`,
                                character: newChar,
                                position: "front",
                                costume: firstCostume,
                                bodyImage: bodyImage,
                                expressionImage: expressionImage,
                                expression: {
                                    eye: 1,
                                    mouth: 1,
                                },
                            },
                        });
                    }}
                >
                    {Object.keys(data)
                        .sort((a, b) => a.localeCompare(b))
                        .map((c) => {
                            return (
                                <option key={c} value={c}>
                                    {c === "rina_board"
                                        ? data[c].information.first + " (Board)"
                                        : data[c].information.first}
                                </option>
                            );
                        })}
                    <option key="custom" value="custom">
                        Custom
                    </option>
                </select>
            </div>
            <div className="group">
                <h1 className="white">Costume</h1>

                <div
                    className={
                        sprites[currentLayer].character == "custom"
                            ? "hide"
                            : "row setting"
                    }
                >
                    <button
                        className={
                            sprites[currentLayer].position == "front"
                                ? "btn-tab w-100 btn-green"
                                : "btn-tab w-100 btn-white"
                        }
                        onClick={async () => {
                            const character = sprites[currentLayer].character;
                            const firstCostume = data[character].costumes[0];
                            const bodyImage = await loadImage(
                                `/img/sprites/${character}/${firstCostume}_0.png`
                            );
                            const expressionImage = await loadImage(
                                `/img/sprites/${character}/${firstCostume}_1.png`
                            );
                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    position: "front",
                                    costume: firstCostume,
                                    bodyImage: bodyImage,
                                    expressionImage: expressionImage,
                                },
                            });
                        }}
                    >
                        Front
                    </button>
                    <button
                        className={
                            sprites[currentLayer].position == "back"
                                ? "btn-tab w-100 btn-green"
                                : "btn-tab w-100 btn-white"
                        }
                        onClick={async () => {
                            const character = sprites[currentLayer].character;
                            const firstCostume = data[character].back[0];
                            const bodyImage = await loadImage(
                                `/img/sprites_back/${character}/${firstCostume}_0.png`
                            );
                            const expressionImage = null;
                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    position: "back",
                                    costume: firstCostume,
                                    bodyImage: bodyImage,
                                    expressionImage: expressionImage,
                                },
                            });
                        }}
                    >
                        Back
                    </button>
                </div>
                <CostumePicker
                    sprites={sprites}
                    setSprites={setSprites}
                    currentLayer={currentLayer}
                ></CostumePicker>
            </div>
            <div
                className={
                    sprites[currentLayer].position == "front" ? "group" : "hide"
                }
            >
                <h1 className="white">Expression</h1>
                <div className="setting row center">
                    <div className="column right-20">
                        <i className="bi bi-eye-fill white icon-expression"></i>
                    </div>
                    <div className="row w-100 space-center">
                        <i
                            className="bi bi-caret-left-fill white icon-expression"
                            onClick={() => {
                                if (sprites[currentLayer].expression.eye == 1) {
                                    return;
                                }
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        expression: {
                                            ...sprites[currentLayer].expression,
                                            eye:
                                                sprites[currentLayer].expression
                                                    .eye - 1,
                                        },
                                    },
                                });
                            }}
                        ></i>
                        <p className="white expression-value">
                            {sprites[currentLayer].expression.eye}
                        </p>
                        <i
                            className="bi bi-caret-right-fill white icon-expression"
                            onClick={() => {
                                const length = Object.keys(
                                    data[sprites[currentLayer].character]
                                        .expression.eye
                                ).length;
                                if (
                                    sprites[currentLayer].expression.eye >=
                                    length
                                ) {
                                    return;
                                }
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        expression: {
                                            ...sprites[currentLayer].expression,
                                            eye:
                                                sprites[currentLayer].expression
                                                    .eye + 1,
                                        },
                                    },
                                });
                            }}
                        ></i>
                    </div>
                </div>
                <div className="setting row center">
                    <div className="column right-20">
                        <i className="bi bi-emoji-smile-fill white icon-expression"></i>
                    </div>
                    <div className="row w-100 space-center">
                        <i
                            className="bi bi-caret-left-fill white icon-expression"
                            onClick={() => {
                                if (
                                    sprites[currentLayer].expression.mouth == 1
                                ) {
                                    return;
                                }
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        expression: {
                                            ...sprites[currentLayer].expression,
                                            mouth:
                                                sprites[currentLayer].expression
                                                    .mouth - 1,
                                        },
                                    },
                                });
                            }}
                        ></i>
                        <p className="white expression-value">
                            {sprites[currentLayer].expression.mouth}
                        </p>
                        <i
                            className="bi bi-caret-right-fill white icon-expression"
                            onClick={() => {
                                const length = Object.keys(
                                    data[sprites[currentLayer].character]
                                        .expression.mouth
                                ).length;
                                if (
                                    sprites[currentLayer].expression.mouth >=
                                    length
                                ) {
                                    return;
                                }
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        expression: {
                                            ...sprites[currentLayer].expression,
                                            mouth:
                                                sprites[currentLayer].expression
                                                    .mouth + 1,
                                        },
                                    },
                                });
                            }}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="group">
                <h1 className="white">Options</h1>
                <div className="column">
                    <Slider
                        id="x-offset"
                        text={`X-Offset (${sprites[currentLayer].options.x}px)`}
                        value={sprites[currentLayer].options.x}
                        onChange={(number) => {
                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    options: {
                                        ...sprites[currentLayer].options,
                                        x: parseInt(number),
                                    },
                                },
                            });
                        }}
                        range={[-1024, 1024]}
                        allowEdit={true}
                    />
                    <Slider
                        id="y-offset"
                        text={`Y-Offset (${sprites[currentLayer].options.y}px)`}
                        value={sprites[currentLayer].options.y}
                        onChange={(number) => {
                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    options: {
                                        ...sprites[currentLayer].options,
                                        y: parseInt(number),
                                    },
                                },
                            });
                        }}
                        range={[-1024, 1024]}
                        allowEdit={true}
                    />
                    <Slider
                        id="scale"
                        text={`Scale (${sprites[currentLayer].options.scale}px)`}
                        value={sprites[currentLayer].options.scale}
                        onChange={(number) => {
                            setSprites({
                                ...sprites,
                                [currentLayer]: {
                                    ...sprites[currentLayer],
                                    options: {
                                        ...sprites[currentLayer].options,
                                        scale: parseInt(number),
                                    },
                                },
                            });
                        }}
                        range={[-512, 512]}
                        allowEdit={true}
                    />
                </div>
                <Checkbox
                    id="sprite-hide"
                    text="Hidden"
                    onChange={(e) => {
                        setSprites({
                            ...sprites,
                            [currentLayer]: {
                                ...sprites[currentLayer],
                                options: {
                                    ...sprites[currentLayer].options,
                                    hidden: e.target.checked,
                                },
                            },
                        });
                    }}
                    checked={sprites[currentLayer].options.hidden}
                />
            </div>
        </div>
    );
};

export default SpriteSidebar;
