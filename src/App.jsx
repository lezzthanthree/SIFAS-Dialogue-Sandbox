import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import loadImage from "./js/loadImage";
import "./css/main.css";

const defaultBG = new Image();
defaultBG.src = "/img/background/6olyyw_0.jpg";

function App() {
    const [hideState, setHideState] = useState(false);
    const [tabState, setTabState] = useState("background");
    const [background, setBackground] = useState(null);
    const [nameTag, setNameTag] = useState({
        primary: "#ff79cd",
        secondary: "#ffcdec",
        name: "Honoka",
        hidden: false,
    });
    const [text, setText] = useState("kyou no pan ga umai!");
    const [sprites, setSprites] = useState({
        "sprite-layer-1": {
            "layer-name": "Sprite 1: Honoka",
            character: "honoka",
            costume: "3c2bnw",
            expression: {
                eye: 1,
                mouth: 1,
            },
            options: {
                x: 0,
                y: 0,
                scale: 0,
                hidden: false,
            },
        },
    });

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
                sprites={sprites}
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
                sprites={sprites}
                setSprites={setSprites}
            ></Sidebar>
        </main>
    );
}

export default App;
