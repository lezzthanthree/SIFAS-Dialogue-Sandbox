import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { AppContext } from "./AppContext";
import "./css/main.css";

function App() {
    const { hideState } = useContext(AppContext);
    return (
        <main>
            <Content></Content>
            {hideState === false && <Sidebar></Sidebar>}
        </main>
    );
}

export default App;
