import data from "../../characters.json";
import { useState } from "react";
import loadImage from "../../js/loadImage";
import CostumePicker from "../CostumePicker";

const SpriteSidebar = ({ sprites, setSprites, nextLayer, setNextLayer }) => {
    const [currentLayer, setCurrentLayer] = useState(Object.keys(sprites)[0]);

    const promptNumber = () => {
        const number = prompt("Enter a value");
        if (isNaN(number) || number == null) {
            alert("Please input a valid number... *honk*");
            return NaN;
        }
        return number;
    };
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
                                data[sprites[currentLayer].character]
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
                                data[sprites[currentLayer].character]
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
            </div>
            <div className="group">
                <h1 className="white">Character</h1>
                <select
                    name=""
                    id=""
                    className="sel-small setting w-100"
                    value={sprites[currentLayer].character}
                    onChange={async (e) => {
                        const newChar = e.target.value;
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
                </select>
            </div>
            <div className="group">
                <h1 className="white">Costume</h1>
                <div className="row setting">
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
                                    expression: {
                                        eye: 1,
                                        mouth: 1,
                                    },
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
                                    expression: {
                                        eye: 1,
                                        mouth: 1,
                                    },
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
                    sprites[currentLayer].position == "back" ? "hide" : "group"
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
                    <div className="column setting">
                        <label
                            htmlFor="X-offset"
                            className="label-slider white bottom-10"
                        >
                            X Offset ({sprites[currentLayer].options.x}px)
                        </label>
                        <div className="row white center">
                            <input
                                type="range"
                                name="X-offset"
                                id="x-offset"
                                className="white w-100"
                                value={sprites[currentLayer].options.x}
                                min="-1024"
                                max="1024"
                                onChange={(e) => {
                                    setSprites({
                                        ...sprites,
                                        [currentLayer]: {
                                            ...sprites[currentLayer],
                                            options: {
                                                ...sprites[currentLayer]
                                                    .options,
                                                x: parseInt(e.target.value),
                                            },
                                        },
                                    });
                                }}
                            />
                            <i
                                className="bi bi-pencil-fill left-10 sprite-setting-icon"
                                onClick={() => {
                                    const number = promptNumber();
                                    console.log(number);
                                    if (isNaN(number) || number == null) {
                                        return;
                                    }
                                    setSprites({
                                        ...sprites,
                                        [currentLayer]: {
                                            ...sprites[currentLayer],
                                            options: {
                                                ...sprites[currentLayer]
                                                    .options,
                                                x: parseInt(number),
                                            },
                                        },
                                    });
                                }}
                            ></i>
                        </div>
                    </div>
                    <div className="column setting">
                        <label
                            htmlFor="Y-offset"
                            className="label-slider white bottom-10"
                        >
                            Y Offset ({sprites[currentLayer].options.y}px)
                        </label>
                        <div className="row white center">
                            <input
                                type="range"
                                name="Y-offset"
                                id="y-offset"
                                className="white w-100"
                                value={sprites[currentLayer].options.y}
                                min="-1024"
                                max="1024"
                                onChange={(e) => {
                                    setSprites({
                                        ...sprites,
                                        [currentLayer]: {
                                            ...sprites[currentLayer],
                                            options: {
                                                ...sprites[currentLayer]
                                                    .options,
                                                y: parseInt(e.target.value),
                                            },
                                        },
                                    });
                                }}
                            />
                            <i
                                className="bi bi-pencil-fill left-10 sprite-setting-icon"
                                onClick={() => {
                                    const number = promptNumber();
                                    console.log(number);
                                    if (isNaN(number) || number == null) {
                                        return;
                                    }
                                    setSprites({
                                        ...sprites,
                                        [currentLayer]: {
                                            ...sprites[currentLayer],
                                            options: {
                                                ...sprites[currentLayer]
                                                    .options,
                                                y: parseInt(number),
                                            },
                                        },
                                    });
                                }}
                            ></i>
                        </div>
                    </div>
                    <div className="column setting">
                        <label
                            htmlFor="Scale"
                            className="label-slider white bottom-10"
                        >
                            Scale ({sprites[currentLayer].options.scale}px)
                        </label>
                        <div className="row white center">
                            <input
                                type="range"
                                name="Scale"
                                id="scale"
                                className="white w-100"
                                value={sprites[currentLayer].options.scale}
                                min="-512"
                                max="512"
                                onChange={(e) => {
                                    setSprites({
                                        ...sprites,
                                        [currentLayer]: {
                                            ...sprites[currentLayer],
                                            options: {
                                                ...sprites[currentLayer]
                                                    .options,
                                                scale: parseInt(e.target.value),
                                            },
                                        },
                                    });
                                }}
                            />
                            <i
                                className="bi bi-pencil-fill left-10 sprite-setting-icon"
                                onClick={() => {
                                    const number = promptNumber();
                                    console.log(number);
                                    if (isNaN(number) || number == null) {
                                        return;
                                    }
                                    setSprites({
                                        ...sprites,
                                        [currentLayer]: {
                                            ...sprites[currentLayer],
                                            options: {
                                                ...sprites[currentLayer]
                                                    .options,
                                                scale: parseInt(number),
                                            },
                                        },
                                    });
                                }}
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="checkbox-form setting center">
                    <input
                        type="checkbox"
                        name="sprite-hide"
                        id="sprite-hide"
                        className="right-10"
                        checked={sprites[currentLayer].options.hidden}
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
                    />
                    <label
                        htmlFor="sprite-hide"
                        className="label-checkbox white  w-100"
                    >
                        Hidden
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SpriteSidebar;
