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
                    className="absolute top-left justify-center white column fixed-0-0"
                    id="mobile"
                    onClick={() => {
                        setRead(true);
                    }}
                >
                    <p className="bottom-10">
                        The bold text bug on Apple devices has now been fixed.
                        If the bug still persists, clearing the site&apos;s
                        cookies may be necessary.
                    </p>
                    <p className="bottom-10">
                        If that did not work, please report the issue on{" "}
                        <a
                            href="https://github.com/lezzthanthree/SIFAS-Dialogue-Sandbox"
                            className="white text-orange"
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
