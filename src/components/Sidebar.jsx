import BackgroundSidebar from "./Sidebar/BackgroundSidebar";
import TextSidebar from "./Sidebar/TextSidebar";
import SpriteSidebar from "./Sidebar/SpriteSidebar";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Sidebar = () => {
    const { hideState, tabState, background, nameTag, text, sprites } =
        useContext(AppContext);
    return (
        <div id="sidebar" className={hideState ? "hide" : ""}>
            {tabState === "background" && background && <BackgroundSidebar />}
            {tabState === "text" &&
                text !== null &&
                text !== undefined &&
                nameTag && <TextSidebar />}
            {tabState === "sprite" && sprites && <SpriteSidebar />}
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
