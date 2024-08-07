import BackgroundSidebar from "./Sidebar/BackgroundSidebar";
import TextSidebar from "./Sidebar/TextSidebar";
import SpriteSidebar from "./Sidebar/SpriteSidebar";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
    const {
        hideState,
        tabState,
        background,
        nameTag,
        text,
        sprites,
        setIdDebug,
    } = useContext(AppContext);
	const { t } = useTranslation();
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
                <div className="center white font-20">{t("please-wait")}</div>
            )}
            <a
                href="https://github.com/lezzthanthree/SIFAS-Dialogue-Sandbox/blob/master/README.md#report-an-issue"
                target="_blank"
                className="white center"
                onClick={() => {
                    setIdDebug(true);
                }}
            >
		{t("report-issue")}
            </a>
        </div>
    );
};

export default Sidebar;
