import { useState } from "react";
import data from "../characters.json";
import loadImage from "../js/loadImage";

const CostumePicker = ({ sprites, setSprites, currentLayer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            {show && (
                <div id="picker">
                    <button
                        id="picker-close"
                        className="icon btn-white"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        <i className="bi bi-x-lg icon-btn"></i>
                    </button>
                    {data[sprites[currentLayer].character].costumes.map(
                        (cos) => {
                            return (
                                <img
                                    key={cos}
                                    className="picker-item costume-picker-item"
                                    src={`/img/sprites/${sprites[currentLayer].character}/${cos}_0.png`}
                                    onClick={async () => {
                                        const bodyImage = await loadImage(
                                            `/img/sprites/${sprites[currentLayer].character}/${cos}_0.png`
                                        );
                                        const expressionImage = await loadImage(
                                            `/img/sprites/${sprites[currentLayer].character}/${cos}_1.png`
                                        );
                                        setSprites({
                                            ...sprites,
                                            [currentLayer]: {
                                                ...sprites[currentLayer],
                                                costume: cos,
                                                bodyImage: bodyImage,
                                                expressionImage:
                                                    expressionImage,
                                            },
                                        });
                                        setShow(false);
                                    }}
                                />
                            );
                        }
                    )}
                </div>
            )}
            <img
                src={sprites ? sprites[currentLayer].bodyImage.src : ""}
                id="costume-picker"
                className="image-picker setting"
                onClick={() => {
                    setShow(!show);
                }}
            />
        </>
    );
};

export default CostumePicker;
