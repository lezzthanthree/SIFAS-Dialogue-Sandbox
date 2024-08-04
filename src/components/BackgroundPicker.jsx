import { useContext, useState } from "react";
import data from "../background.json";
import loadImage from "../js/loadImage";
import { AppContext } from "../AppContext";

const BackgroundPicker = ({ background, setBackground }) => {
    const [show, setShow] = useState(false);
    const { idDebug } = useContext(AppContext);
    return (
        <>
            {show && (
                <div
                    id="picker"
                    onClick={() => {
                        setShow(false);
                    }}
                >
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
                            <div key={bg} className="picker-div relative center">
                                {idDebug && (
                                    <p className="id-debug absolute white">
                                        {bg}
                                    </p>
                                )}
                                <img
                                    className="picker-item background-picker-item"
                                    src={`/img/background_low/${bg}`}
                                    onClick={async () => {
                                        const bgImage = await loadImage(
                                            `/img/background/${bg}`
                                        );
                                        setBackground(bgImage);
                                        setShow(false);
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="relative center">
                {idDebug && (
                    <p className="id-debug absolute white">
                        {background.src.split("/").at(-1)}
                    </p>
                )}
                <img
                    src={background ? background.src : ""}
                    id="background-picker"
                    className="image-picker setting"
                    onClick={() => {
                        setShow(!show);
                    }}
                />
            </div>
        </>
    );
};

export default BackgroundPicker;
