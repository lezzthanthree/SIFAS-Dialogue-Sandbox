import { useContext, useRef, useState } from "react";
import data from "../../characters.json";
import loadImage from "../../js/loadImage";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import UploadImageButton from "../UploadImageButton";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";

const TextSidebar = () => {
    const {
        text,
        setText,
        nameTag,
        setNameTag,
        experimental,
        setExperimental,
    } = useContext(AppContext);
    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const [fart, setFart] = useState(false);
    const defaultColor = useRef(null);
    return (
        <div id="text-sidebar">
            <div className="group">
                <h1 className="white">{t("text-header")}</h1>
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
                ></textarea>
                <Slider
                    id="text-font-size"
                    text={`${t("text-font-size")} (${text.fontSize}px)`}
                    value={text.fontSize}
                    onChange={(number) => {
                        setText({
                            ...text,
                            fontSize: number,
                        });
                    }}
                    range={[10, 100]}
                    allowEdit={true}
                    resetToDefault={35}
                ></Slider>
                <Checkbox
                    id="textbox-hide"
                    text={t("hidden")}
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
                <h1 className="white">{t("name-tag-header")}</h1>
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
                                    selection: "Custom",
                                });
                                defaultColor.current.value = "Custom";
                                sessionStorage.setItem(
                                    "customPrimary",
                                    e.target.value
                                );
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
                                    selection: "Custom",
                                });
                                defaultColor.current.value = "Custom";
                                sessionStorage.setItem(
                                    "customSecondary",
                                    e.target.value
                                );
                            }}
                        />
                    </div>
                    <select
                        id="default-color"
                        ref={defaultColor}
                        className="sel-small w-100"
                        value={nameTag.selection}
                        onChange={(e) => {
                            let value = e.target.value;
                            const primary =
                                sessionStorage.getItem("customPrimary");
                            const secondary =
                                sessionStorage.getItem("customSecondary");
                            switch (value) {
                                case "μ's":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#ff79cd",
                                        secondary: "#ffcdec",
                                        selection: "μ's",
                                    });
                                    break;
                                case "Aqours":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#7bc8ff",
                                        secondary: "#cdeaff",
                                        selection: "Aqours",
                                    });
                                    break;
                                case "Nijigasaki":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#ffed45",
                                        secondary: "#fff8b7",
                                        selection: "Nijigasaki",
                                    });
                                    break;
                                case "You":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#c6cee5",
                                        secondary: "#ebebf3",
                                        selection: "You",
                                    });
                                    break;
                                case "Others":
                                    setNameTag({
                                        ...nameTag,
                                        primary: "#bcecab",
                                        secondary: "#e5f8df",
                                        selection: "Others",
                                    });
                                    break;
                                case "Custom":
                                    setNameTag({
                                        ...nameTag,
                                        primary: primary ? primary : "#ff79cd",
                                        secondary: secondary
                                            ? secondary
                                            : "#ffcdec",
                                        selection: "Custom",
                                    });
                                    break;
                            }
                        }}
                    >
                        <option value="μ's">μ&apos;s</option>
                        <option value="Aqours">Aqours</option>
                        <option value="Nijigasaki">Nijigasaki</option>
                        <option value="You">{t("you")}</option>
                        <option value="Others">{t("others")}</option>
                        <option value="Custom">{t("custom")}</option>
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
                                `img/char_icon/${newValue}.png`,
                                "Changed character icon"
                            );
                            setNameTag({
                                ...nameTag,
                                iconValue: newValue,
                                icon: image,
                            });
                        }}
                    >
                        <option key="default" value="default">
                            {t("default")}
                        </option>
                        {Object.keys(data)
                            .sort((a, b) => a.localeCompare(b))
                            .map((c) => {
                                return (
                                    c != "rina_board" && (
                                        <option key={c} value={c}>
                                            {
                                                data[c].information[language]
                                                    .first
                                            }
                                        </option>
                                    )
                                );
                            })}
                        <option key="custom" value="custom">
                            {t("custom")}
                        </option>
                    </select>
                </div>
                <UploadImageButton
                    id="icon-upload"
                    text={
                        <>
                            <i className="bi bi-upload right-10"></i>{" "}
                            {t("icon-upload")}
                        </>
                    }
                    uploadFunction={async (file) => {
                        const imageSrc = URL.createObjectURL(file);
                        const image = await loadImage(
                            imageSrc,
                            "Changed character icon: custom"
                        );
                        setNameTag({
                            ...nameTag,
                            iconValue: "custom",
                            icon: image,
                        });
                    }}
                    alertMsg={t("icon-upload-info")}
                />
                <Checkbox
                    id="name-tag-hide"
                    text={t("hidden")}
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
                <h1 className="white">{t("experimental-header")}</h1>

                <Slider
                    id="font-offset"
                    text={`${t("font-offset")} (${experimental.fontOffset}px)`}
                    value={experimental.fontOffset}
                    onChange={(number) => {
                        setExperimental({
                            ...experimental,
                            fontOffset: number,
                        });
                        localStorage.setItem("fontOffset", number);
                    }}
                    range={[-30, 30]}
                    allowEdit={false}
                    description={
                        <>
                            <p className="white setting font-normal bottom-10 notice-p">
                                {t("font-offset-info")}
                            </p>
                            <img
                                src="/img/offset-error.png"
                                alt=""
                                className="w-100"
                            />
                        </>
                    }
                    resetToDefault={0}
                />

                <Checkbox
                    id="shadow-toggle"
                    text={t("font-shadow")}
                    checked={experimental.shadow}
                    onChange={(e) => {
                        setExperimental({
                            ...experimental,
                            shadow: e.target.checked,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default TextSidebar;
