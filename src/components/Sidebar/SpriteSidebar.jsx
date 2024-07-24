import data from "../../characters.json";
import { useState } from "react";
import loadImage from "../../js/loadImage";

const SpriteSidebar = ({ sprites, setSprites }) => {
    const [currentLayer, setCurrentLayer] = useState("sprite-layer-1");
    const [nextLayer, setNextLayer] = useState(2);
    return (
        <div id="sprite-sidebar">
            <div className="group">
                <h1 className="white align-center">
                    Sprites
                    <i
                        className="bi bi-plus-circle sprite-setting-icon left-10"
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
                        className="bi bi-trash-fill sprite-setting-icon left-10"
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
                    {Object.keys(sprites).map((s) => {
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
                <img
                    src={`/img/sprites/${sprites[currentLayer].character}/${sprites[currentLayer].costume}_0.png`}
                    alt=""
                    className="image-picker setting"
                />
            </div>
            <div className="group">
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
                        <input
                            type="range"
                            name="X-offset"
                            id="x-offset"
                            className="white w-100"
                            value={sprites[currentLayer].options.x}
                            min="-1024"
                            max="1024"
                            list="zero"
                            onChange={(e) => {
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        options: {
                                            ...sprites[currentLayer].options,
                                            x: parseInt(e.target.value),
                                        },
                                    },
                                });
                            }}
                        />
                    </div>
                    <div className="column setting">
                        <label
                            htmlFor="Y-offset"
                            className="label-slider white bottom-10"
                        >
                            Y Offset ({sprites[currentLayer].options.y}px)
                        </label>
                        <input
                            type="range"
                            name="Y-offset"
                            id="y-offset"
                            className="white w-100"
                            value={sprites[currentLayer].options.y}
                            min="-1024"
                            max="1024"
                            list="zero"
                            onChange={(e) => {
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        options: {
                                            ...sprites[currentLayer].options,
                                            y: parseInt(e.target.value),
                                        },
                                    },
                                });
                            }}
                        />
                    </div>
                    <div className="column setting">
                        <label
                            htmlFor="Scale"
                            className="label-slider white bottom-10"
                        >
                            Scale ({sprites[currentLayer].options.scale}px)
                        </label>
                        <input
                            type="range"
                            name="Scale"
                            id="scale"
                            className="white w-100"
                            value={sprites[currentLayer].options.scale}
                            min="-512"
                            max="512"
                            list="zero"
                            onChange={(e) => {
                                setSprites({
                                    ...sprites,
                                    [currentLayer]: {
                                        ...sprites[currentLayer],
                                        options: {
                                            ...sprites[currentLayer].options,
                                            scale: parseInt(e.target.value),
                                        },
                                    },
                                });
                            }}
                        />
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
            <datalist id="zero">
                <option value="0"></option>
            </datalist>
        </div>
    );
};

export default SpriteSidebar;
