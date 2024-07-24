import data from "../../characters.json";
import loadImage from "../../js/loadImage";

const TextSidebar = ({ text, setText, nameTag, setNameTag }) => {
    console.log(nameTag);
    return (
        <div id="text-sidebar">
            <div className="group">
                <h1 className="white">Text</h1>
                <textarea
                    className="btn-small btn-white w-100 setting"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    value={text}
                >
                    Edit Text
                </textarea>
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
                        <img src={nameTag.icon.src} id="icon" />
                    </div>
                    <select
                        className="sel-small w-100"
                        value={nameTag.iconValue}
                        id="char-icon"
                        onChange={async (e) => {
                            const newValue = e.target.value;
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
                    </select>
                </div>
                <div className="checkbox-form setting center">
                    <input
                        type="checkbox"
                        name="name-tag-hide"
                        id="name-tag-hide"
                        className="right-10"
                        onInput={(e) => {
                            setNameTag({
                                ...nameTag,
                                hidden: e.target.checked,
                            });
                        }}
                    />
                    <label
                        htmlFor="name-tag-hide"
                        className="label-checkbox white  w-100"
                    >
                        Hidden
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TextSidebar;
