import BackgroundSidebar from "./Sidebar/BackgroundSidebar";
import TextSidebar from "./Sidebar/TextSidebar";
import SpriteSidebar from "./Sidebar/SpriteSidebar";

const Sidebar = ({
    hideState,
    tabState,
    background,
    setBackground,
    nameTag,
    setNameTag,
    text,
    setText,
    sprites,
    setSprites,
    experimental,
    setExperimental,
    nextLayer,
    setNextLayer,
}) => {
    console.log(text);
    return (
        <div id="sidebar" className={hideState ? "hide" : ""}>
            {tabState === "background" && background && (
                <BackgroundSidebar
                    background={background}
                    setBackground={setBackground}
                />
            )}
            {tabState === "text" &&
                text !== null &&
                text !== undefined &&
                nameTag && (
                    <TextSidebar
                        text={text}
                        setText={setText}
                        nameTag={nameTag}
                        setNameTag={setNameTag}
                        experimental={experimental}
                        setExperimental={setExperimental}
                    />
                )}
            {tabState === "sprite" && sprites && (
                <SpriteSidebar
                    sprites={sprites}
                    setSprites={setSprites}
                    nextLayer={nextLayer}
                    setNextLayer={setNextLayer}
                />
            )}
            {(!background ||
                text === null ||
                text === undefined ||
                !nameTag ||
                !sprites) && (
                <div className="center white font-20">Please wait</div>
            )}
        </div>
    );
};

export default Sidebar;
