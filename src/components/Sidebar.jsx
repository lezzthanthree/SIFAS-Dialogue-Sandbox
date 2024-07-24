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
}) => {
    return (
        <div id="sidebar" className={hideState ? "hide" : ""}>
            {tabState === "background" && (
                <BackgroundSidebar
                    background={background}
                    setBackground={setBackground}
                />
            )}
            {tabState === "text" && (
                <TextSidebar
                    text={text}
                    setText={setText}
                    nameTag={nameTag}
                    setNameTag={setNameTag}
                />
            )}
            {tabState === "sprite" && (
                <SpriteSidebar sprites={sprites} setSprites={setSprites} />
            )}
        </div>
    );
};

export default Sidebar;
