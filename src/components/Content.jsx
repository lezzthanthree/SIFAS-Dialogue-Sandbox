import Canvas from "./Canvas";
import data from "../characters.json";
import drawBackground from "../js/drawBackground";
import drawSprites from "../js/drawSprites";
import drawNameTag from "../js/drawNameTag";
import drawText from "../js/drawText";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Content = () => {
    const {
        tabState,
        hideState,
        setTabState,
        setHideState,
        background,
        sprites,
        nameTag,
        text,
        clearTimes,
        setClearTimes,
        experimental,
    } = useContext(AppContext);
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const tabs = document.getElementById("tabs");
        const save = document.getElementById("save");
        const hideAtPosition = 100;

        if (scrollPosition > hideAtPosition) {
            tabs.style.opacity = "0";
            save.style.opacity = "0";
        } else {
            tabs.style.opacity = "1.0";
            save.style.opacity = "1.0";
        }
    });
    const save = () => {
        const canvas = document.getElementsByTagName("canvas")[0];
        var image = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");

        var link = document.createElement("a");
        link.href = image;
        link.download = "dialogue.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const drawCanvas = async (ctx) => {
        ctx.canvas.width = 1820;
        ctx.canvas.height = 1024;

        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        await drawBackground(ctx, background);

        if (sprites) {
            const drawSpritePromises = Object.keys(sprites)
                .sort((a, b) => sprites[a].layerNumber - sprites[b].layerNumber)
                .map((key) =>
                    drawSprites(ctx, sprites[key], data[sprites[key].character])
                );

            await Promise.all(drawSpritePromises);
        }

        await drawText(ctx, text, experimental);
        await drawNameTag(ctx, nameTag, experimental);
    };
    return (
        <div id="content" className="center relative">
            <div
                className={hideState ? "hide" : "absolute tabs button-icons"}
                id="tabs"
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
                            ? "icon btn-orange"
                            : "icon btn-white"
                    }
                    onClick={() => setTabState("sprite")}
                >
                    <i className="bi bi-person-fill icon-btn"></i>
                </button>
            </div>
            <div className="absolute bottom-right hide-sidebar button-icons">
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
            <div className="absolute bottom-left button-icons save" id="save">
                <button
                    className="btn-small btn-green btn-192 bottom-20"
                    onClick={() => {
                        save();
                    }}
                >
                    Save
                </button>
                <button
                    className="btn-small btn-white btn-192"
                    onClick={() => {
                        const confirmation = confirm(
                            "You are about to clear the canvas! Any progress will be lost. \nPressing 'OK' will proceed the action."
                        );
                        console.log(confirmation);
                        if (confirmation) {
                            setClearTimes(clearTimes + 1);
                        }
                    }}
                >
                    Clear
                </button>
            </div>
            <div className="absolute bottom-center black font-20">
                <a
                    href="https://github.com/lezzthanthree/SIFAS-Dialogue-Sandbox"
                    target="_blank"
                >
                    <i className="bi bi-github black" />
                </a>
            </div>
            <Canvas draw={drawCanvas}></Canvas>
        </div>
    );
};

export default Content;
