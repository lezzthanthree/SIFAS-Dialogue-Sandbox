import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./css/main.css";

function App() {
    const [hideState, setHideState] = useState(false);
    const [tabState, setTabState] = useState("background");
    return (
        <main>
            <Content
                tabState={tabState}
                hideState={hideState}
                setHideState={setHideState}
                setTabState={setTabState}
            ></Content>
            <Sidebar hideState={hideState} tabState={tabState}></Sidebar>
        </main>
    );
}

export default App;
