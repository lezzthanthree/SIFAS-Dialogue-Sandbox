import Canvas from "./Canvas";
import drawNameTag from "../js/drawNameTag";
import drawBackground from "../js/drawBackground";
import drawText from "../js/drawText";

const Content = ({
    tabState,
    hideState,
    setTabState,
    setHideState,
    background,
    nameTag,
    text,
}) => {
    const drawCanvas = (ctx) => {
        ctx.canvas.width = 1820;
        ctx.canvas.height = 1024;

        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        drawBackground(ctx, background);
        drawText(ctx, text);
        drawNameTag(ctx, nameTag);
    };

    return (
        <div id="content" className="center relative">
            <div
                className={
                    hideState ? "hide" : "absolute top-right button-icons"
                }
            >
                <button
                    className={
                        tabState === "background"
                            ? "icon btn-orange bottom-20"
                            : "icon btn-white bottom-20"
                    }
                    onClick={() => setTabState("background")}
                >
                    <i className="bi bi-card-image icon-btn"></i>
                </button>
                <button
                    className={
                        tabState === "text"
                            ? "icon btn-orange bottom-20"
                            : "icon btn-white bottom-20"
                    }
                    onClick={() => setTabState("text")}
                >
                    <i className="bi bi-chat icon-btn"></i>
                </button>
                <button
                    className={
                        tabState === "sprite"
                            ? "icon btn-orange bottom-20"
                            : "icon btn-white bottom-20"
                    }
                    onClick={() => setTabState("sprite")}
                >
                    <i className="bi bi-person-fill icon-btn"></i>
                </button>
            </div>
            <div className="absolute bottom-right button-icons">
                <button
                    className="icon btn-white"
                    onClick={() => setHideState(!hideState)}
                >
                    {hideState ? (
                        <i className="bi bi-chevron-left icon-btn"></i>
                    ) : (
                        <i className="bi bi-chevron-right icon-btn"></i>
                    )}
                </button>
            </div>
            <div className="absolute bottom-left button-icons">
                <button className="btn-small btn-green btn-192 bottom-20">
                    Save
                </button>
                <button
                    className="btn-small btn-white btn-192"
                    onClick={() => {
                        console.log("Canvas rerendered");
                    }}
                >
                    Rerender
                </button>
            </div>
            <Canvas draw={drawCanvas}></Canvas>
        </div>
    );
};

export default Content;
