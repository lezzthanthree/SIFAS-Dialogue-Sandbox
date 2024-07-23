import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import "./css/main.css";
import { useState } from "react";

function App() {
    const [hideState, setHideState] = useState(false);
    const [tabState, setTabState] = useState("background");
    return (
        <main>
            <Canvas></Canvas>
            <Sidebar hideState={hideState} tabState={tabState}></Sidebar>
        </main>
    );
}

export default App;
