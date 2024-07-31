import { useEffect, useRef, useState } from "react";
import data from "../background.json";
import loadImage from "../js/loadImage";

const BackgroundPicker = ({ background, setBackground }) => {
    const [show, setShow] = useState(false);
    const selected = useRef(null);

    useEffect(() => {
        if (selected.current) {
            selected.current.scrollIntoView({ top: -45, behavior: "smooth" });
        }
    }, [show]);
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
                            <img
                                key={bg}
                                ref={bg == background.id ? selected : null}
                                className={
                                    bg == background.id
                                        ? "picker-item item-selected background-picker-item"
                                        : "picker-item background-picker-item"
                                }
                                src={`/img/background/${bg}`}
                                onClick={async () => {
                                    const bgImage = await loadImage(
                                        `/img/background/${bg}`
                                    );
                                    setBackground({
                                        img: bgImage,
                                        id: bg,
                                    });
                                    setShow(false);
                                }}
                            />
                        );
                    })}
                </div>
            )}
            <img
                src={background ? background.img.src : ""}
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
