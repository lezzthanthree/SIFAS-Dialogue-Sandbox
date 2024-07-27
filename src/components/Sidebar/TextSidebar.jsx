import { useState } from "react";
import data from "../../characters.json";
import loadImage from "../../js/loadImage";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import UploadImageButton from "../UploadImageButton";

const TextSidebar = ({
    text,
    setText,
    nameTag,
    setNameTag,
    experimental,
    setExperimental,
}) => {
    const [fart, setFart] = useState(false);
    return (
        <div id="text-sidebar">
            <div className="group">
                <h1 className="white">Text</h1>
                <textarea
                    className="btn-small btn-white w-100 setting"
                    onChange={(e) => {
                        let textToChange = e.target.value;
                        console.log(typeof textToChange);
                        if (/fart/gim.test(textToChange) && !fart) {
                            window.open("https://redd.it/nbr4ni");
                            alert("...why?");
                            setFart(true);
                            textToChange =
                                "STOP POSTING ABOUT ELI FART! I'M TIRED OF SEEING IT! \nMY FRIENDS ON TIKTOK SEND ME MEMES, ON DISCORD \nIT'S FUCKING MEMES! I was in a server, right? and ALL OF THE \nCHANNELS were just eli fart stuff. AAAAAAAAAAAAAAHGESFG";
                        }
                        setText({ ...text, dialogue: textToChange });
                    }}
                    value={text.dialogue}
                >
                    Edit Text
                </textarea>
                <Checkbox
                    id="textbox-hide"
                    text="Hidden"
                    onChange={(e) => {
                        const newValue = e.target.checked;
                        if (newValue)
                            console.info(
                                "Text box hidden. The name tag is automatically be hidden as well."
                            );
                        setText({
                            ...text,
                            hidden: newValue,
                        });
                        setNameTag({
                            ...nameTag,
                            hidden: newValue,
                        });
                    }}
                    checked={text.hidden}
                />
            </div>
            <div className="group">
                <h1 className="white">Name Tag</h1>
                <input
                    type="text"
                    className="txt-small txt-white setting w-100"
                    placeholder="Name"
                    value={nameTag.name}
                    onInput={(e) => {
                        setNameTag({
                            ...nameTag,
                            name: e.target.value,
                        });
                    }}
                />
                <div className="setting row center">
                    <div className="column right-20">
                        <input
                            type="color"
                            name="primary"
                            id="primary"
                            className="color-select"
                            value={nameTag.primary}
                            onChange={(e) => {
                                setNameTag({
                                    ...nameTag,
                                    primary: e.target.value,
                                });
                                document.getElementById("default-color").value =
                                    "custom";
                            }}
                        />
                        <input
                            type="color"
                            name="secondary"
                            id="secondary"
                            className="color-select"
                            value={nameTag.secondary}
                            onChange={(e) => {
                                setNameTag({
                                    ...nameTag,
                                    secondary: e.target.value,
                                });
                                document.getElementById("default-color").value =
                                    "custom";
                            }}
                        />
                    </div>
                    <select
                        id="default-color"
                        className="sel-small w-100"
                        onChange={(e) => {
                            let value = e.target.value;
                            switch (value) {
                                case "muse":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#ff79cd",
                                        secondary: "#ffcdec",
                                    });
                                    break;
                                case "aqours":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#7bc8ff",
                                        secondary: "#cdeaff",
                                    });
                                    break;
                                case "niji":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#ffed45",
                                        secondary: "#fff8b7",
                                    });
                                    break;
                                case "you":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#c6cee5",
                                        secondary: "#ebebf3",
                                    });
                                    break;
                                case "others":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#bcecab",
                                        secondary: "#e5f8df",
                                    });
                                    break;
                            }
                        }}
                    >
                        <option value="muse">μ&apos;s</option>
                        <option value="aqours">Aqours</option>
                        <option value="niji">Nijigasaki</option>
                        <option value="you">You</option>
                        <option value="others">Others</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                <div className="setting row center">
                    <div className="column right-20">
                        <img
                            src={nameTag.icon ? nameTag.icon.src : ""}
                            id="char-icon-img"
                        />
                    </div>
                    <select
                        className="sel-small w-100"
                        value={nameTag.iconValue}
                        id="char-icon"
                        onChange={async (e) => {
                            const newValue = e.target.value;
                            if (newValue == "default") {
                                setNameTag({
                                    ...nameTag,
                                    iconValue: newValue,
                                    icon: null,
                                });
                                return;
                            }
                            if (newValue == "custom") {
                                document
                                    .getElementById("btn-icon-upload")
                                    .click();
                                return;
                            }
                            const image = await loadImage(
                                `img/char_icon/${newValue}.png`
                            );
                            setNameTag({
                                ...nameTag,
                                iconValue: newValue,
                                icon: image,
                            });
                        }}
                    >
                        <option key="default" value="default">
                            --Default--
                        </option>
                        {Object.keys(data)
                            .sort((a, b) => a.localeCompare(b))
                            .map((c) => {
                                return (
                                    c != "rina_board" && (
                                        <option key={c} value={c}>
                                            {data[c].information.first}
                                        </option>
                                    )
                                );
                            })}
                        <option key="custom" value="custom">
                            Custom
                        </option>
                    </select>
                </div>
                <UploadImageButton
                    id="icon-upload"
                    text={
                        <>
                            <i className="bi bi-upload right-10"></i> Icon
                        </>
                    }
                    uploadFunction={async (file) => {
                        const imageSrc = URL.createObjectURL(file);
                        const image = await loadImage(imageSrc);
                        setNameTag({
                            ...nameTag,
                            iconValue: "custom",
                            icon: image,
                        });
                    }}
                    alertMsg="You are about to upload a custom icon. For the best experience, upload icons with a 5:4 ratio."
                />
                <Checkbox
                    id="name-tag-hide"
                    text="Hidden"
                    onChange={(e) => {
                        setNameTag({
                            ...nameTag,
                            hidden: e.target.checked,
                        });
                    }}
                    checked={nameTag.hidden}
                />
            </div>
            <div className="group relative">
                <img
                    src="/img/notice.png"
                    alt="notice-me"
                    className="absolute notice"
                />
                <h1 className="white">Experimental</h1>

                <Slider
                    id="text-y-offset"
                    text={`Text Y-Offset (${experimental.textOffset}px)`}
                    value={experimental.textOffset}
                    onChange={(number) => {
                        setExperimental({
                            ...experimental,
                            textOffset: number,
                        });
                    }}
                    range={[-30, 30]}
                    z
                    allowEdit={false}
                />
                <p className="white setting font-normal bottom-10 notice-p">
                    If the text in the canvas do not line up correctly,
                    adjustments may be necessary.
                </p>
                <img src="/img/offset-error.png" alt="" className="w-100" />

                <Checkbox
                    id="shadow-toggle"
                    text="Toggle Text Shadow"
                    checked={experimental.shadow}
                    onChange={(e) => {
                        setExperimental({
                            ...experimental,
                            shadow: e.target.checked,
                        });
                    }}
                />
                <p className="white setting font-normal notice-p">
                    If the text appears too bold, turning off text shadow may be
                    needed.
                </p>
                <p className="white setting font-normal notice-p">
                    Apple devices may have this issue.
                </p>
                <img src="/img/bold-error.jpg" alt="" className="w-100" />
            </div>
        </div>
    );
};

export default TextSidebar;
