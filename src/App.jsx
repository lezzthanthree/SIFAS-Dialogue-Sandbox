import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { AppContext } from "./AppContext";
import "./css/main.css";

function App() {
    const { read, setRead, hideState } = useContext(AppContext);
    return (
        <main>
            {!read && (
                <div
                    className="absolute bottom-left justify-center white column fixed-bottom-left w-100"
                    id="mobile"
                    onClick={() => {
                        setRead(true);
                    }}
                >
                    <p className="bottom-10">
                        Spanish Localization is now available! Special thanks to{" "}
                        <a
                            className="text-orange"
                            href="https://github.com/SantosAlarcon"
                        >
                            SantosAlarcon
                        </a>
                        .
                    </p>
                    <p className="bottom-10">
                        If you wish to contribute for localization, you can
                        check this information on{" "}
                        <a
                            href="https://github.com/lezzthanthree/SIFAS-Dialogue-Sandbox/blob/i18n/README.md#the-localization-branch"
                            className="text-orange"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                    <p>Tap this section to close.</p>
                </div>
            )}

            <Content></Content>
            {hideState === false && <Sidebar></Sidebar>}
        </main>
    );
}

export default App;
