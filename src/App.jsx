import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./css/main.css";

const defaultBG = new Image();
defaultBG.src = "/img/background/6olyyw_0.jpg";

function App() {
    const loadImage = async (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = () =>
                reject(new Error(`Failed to load image: ${src}`));
        });
    };

    const [hideState, setHideState] = useState(false);
    const [tabState, setTabState] = useState("background");
    const [background, setBackground] = useState(null);
    const [nameTag, setNameTag] = useState({
        primary: "#ff79cd",
        secondary: "#ffcdec",
        name: "Honoka",
        hidden: false
    });
    const [text, setText] = useState("kyou no pan ga umai!");
    // const [sprites, setSprites] = useState({});

    useEffect(() => {
        loadImage("/img/background/6olyyw_0.jpg")
            .then((img) => setBackground(img))
            .catch((error) => console.error(error));
    }, []);

    return (
        <main>
            <Content
                tabState={tabState}
                hideState={hideState}
                setHideState={setHideState}
                setTabState={setTabState}
                background={background}
                nameTag={nameTag}
                text={text}
            ></Content>
            <Sidebar
                hideState={hideState}
                tabState={tabState}
                background={background}
                setBackground={setBackground}
                nameTag={nameTag}
                setNameTag={setNameTag}
                text={text}
                setText={setText}
            ></Sidebar>
        </main>
    );
}

export default App;
