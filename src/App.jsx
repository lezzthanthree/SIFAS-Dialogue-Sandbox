import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Announcement from "./components/Announcement";
import { AppContext } from "./AppContext";
import "./css/main.css";
import { useTranslation } from "react-i18next";

function App() {
    const { hideState } = useContext(AppContext);
    const { i18n } = useTranslation();
    const language = i18n.language;
    return (
        <main className={["en", "es"].includes(language) ? "latin" : "cjk"}>
            <Announcement></Announcement>
            <Content></Content>
            {hideState === false && <Sidebar></Sidebar>}
        </main>
    );
}

export default App;
