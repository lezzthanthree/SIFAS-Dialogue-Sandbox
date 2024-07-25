import { useState } from "react";
import data from "../background.json";
import loadImage from "../js/loadImage";

const BackgroundPicker = ({ background, setBackground }) => {
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
                    {data["backgrounds"].map((bg) => {
                        return (
                            <img
                                key={bg}
                                className="picker-item background-picker-item"
                                src={`/img/background/${bg}`}
                                onClick={async () => {
                                    const bgImage = await loadImage(
                                        `/img/background/${bg}`
                                    );
                                    setBackground(bgImage);
                                    setShow(false);
                                }}
                            />
                        );
                    })}
                </div>
            )}
            <img
                src={background ? background.src : ""}
                id="background-picker"
                className="image-picker setting"
                onClick={() => {
                    setShow(!show);
                }}
            />
        </>
    );
};

export default BackgroundPicker;
