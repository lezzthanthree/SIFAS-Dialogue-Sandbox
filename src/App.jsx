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
                    className="absolute top-left justify-center white column fixed-0-0 w-100"
                    id="mobile"
                    onClick={() => {
                        setRead(true);
                    }}
                >
                    <p>What&apos;s new?</p>
                    <p className="bottom-10">
                        <ul>
                            <li>
                                You can now change the{" "}
                                <a
                                    href="https://i.imgur.com/U7wFyT9.png"
                                    className="text-orange"
                                >
                                    font size
                                </a>
                                {" "}of the text.
                            </li>
                            <li>
                                Allow slider inputs to revert to default value.
                            </li>
                        </ul>
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
