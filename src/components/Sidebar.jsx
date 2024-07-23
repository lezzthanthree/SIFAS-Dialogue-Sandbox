const Sidebar = ({ hideState, tabState }) => {
    return (
        <div id="sidebar" className={hideState ? "hide" : ""}>
            <div
                id="background-sidebar"
                className={tabState === "background" ? "" : "hide"}
            >
                <div className="group">
                    <h1 className="white">Background</h1>
                    <img src="t.png" alt="" className="image-picker setting" />
                    <button className="btn-small btn-white w-100 setting">
                        Upload Image
                    </button>
                </div>
            </div>
            <div
                id="text-sidebar"
                className={tabState === "text" ? "" : "hide"}
            >
                <div className="group">
                    <h1 className="white">Text</h1>
                    <button className="btn-small btn-white w-100 setting">
                        Edit Text
                    </button>
                </div>
                <div className="group">
                    <h1 className="white">Name Tag</h1>
                    <div className="setting row center">
                        <div className="column right-20">
                            <input
                                type="color"
                                name="primary"
                                id="primary"
                                className="color-select"
                            />
                            <input
                                type="color"
                                name="secondary"
                                id="secondary"
                                className="color-select"
                            />
                        </div>
                        <select className="sel-small w-100">
                            <option value="muse">μ&apos;s</option>
                        </select>
                    </div>
                    <div className="setting row center">
                        <div className="column right-20">
                            <img src="t.png" alt="" id="icon" />
                        </div>
                        <select className="sel-small w-100"></select>
                    </div>
                    <button className="btn-small btn-white w-100 setting">
                        Edit Name
                    </button>
                    <div className="checkbox-form setting center">
                        <input
                            type="checkbox"
                            name="name-tag-hide"
                            id="name-tag-hide"
                            className="right-10"
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
            <div
                id="sprite-sidebar"
                className={tabState === "sprite" ? "" : "hide"}
            >
                <div className="group">
                    <h1 className="white">Sprites</h1>
                    <select
                        name=""
                        id=""
                        className="sel-small setting w-100"
                    ></select>
                </div>
                <div className="group">
                    <h1 className="white">Character</h1>
                    <select
                        name=""
                        id=""
                        className="sel-small setting w-100"
                    ></select>
                </div>
                <div className="group">
                    <h1 className="white">Costume</h1>
                    <img src="" alt="" className="image-picker setting" />
                </div>
                <div className="group">
                    <h1 className="white">Expression</h1>
                </div>
                <div className="group">
                    <h1 className="white">Options</h1>
                    <div className="column">
                        <div className="column setting">
                            <label
                                htmlFor="X-offset"
                                className="label-slider white bottom-10"
                            >
                                X Offset
                            </label>
                            <input
                                type="range"
                                name="X-offset"
                                id=""
                                className="white w-100"
                            />
                        </div>
                        <div className="column setting">
                            <label
                                htmlFor="Y-offset"
                                className="label-slider white bottom-10"
                            >
                                Y Offset
                            </label>
                            <input
                                type="range"
                                name="Y-offset"
                                id=""
                                className="white w-100"
                            />
                        </div>
                        <div className="column setting">
                            <label
                                htmlFor="Scale"
                                className="label-slider white bottom-10"
                            >
                                Scale
                            </label>
                            <input
                                type="range"
                                name="Scale"
                                id=""
                                className="white w-100"
                            />
                        </div>
                    </div>
                    <div className="checkbox-form setting center">
                        <input
                            type="checkbox"
                            name="sprite-hide"
                            id="sprite-hide"
                            className="right-10"
                        />
                        <label
                            htmlFor="sprite-hide"
                            className="label-checkbox white  w-100"
                        >
                            Hidden
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
