import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import loadImage from "./js/loadImage";
import "./css/main.css";

function App() {
    const [hideState, setHideState] = useState(false);
    const [tabState, setTabState] = useState("background");
    const [background, setBackground] = useState(null);
    const [nameTag, setNameTag] = useState(null);
    const [text, setText] = useState("kyou no pan ga umai!");
    const [sprites, setSprites] = useState(null);
    const [experimental, setExperimental] = useState({
        textOffset: 0,
    });
    const [nextLayer, setNextLayer] = useState(2);

    useEffect(() => {
        loadImage("/img/background/6olyyw_0.jpg")
            .then((img) => setBackground(img))
            .catch((error) => console.error(error));
        loadImage("/img/char_icon/honoka.png")
            .then((img) =>
                setNameTag({
                    primary: "#ff79cd",
                    secondary: "#ffcdec",
                    name: "Honoka",
                    iconValue: "honoka",
                    icon: img,
                    hidden: false,
                })
            )
            .catch((error) => console.error(error));

        Promise.all([
            loadImage("/img/sprites/honoka/3c2bnw_0.png"),
            loadImage("/img/sprites/honoka/3c2bnw_1.png"),
        ])
            .then(([bodyImage, expressionImage]) => {
                setSprites({
                    "sprite-layer-1": {
                        layerName: "Layer 1: Honoka",
                        layerNumber: 1,
                        character: "honoka",
                        costume: "3c2bnw",
                        bodyImage: bodyImage,
                        expressionImage: expressionImage,
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
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <main>
            <div
                className="absolute top-left justify-center white column"
                id="mobile"
            >
                <p className="bottom-10">
                    If you are using a phone, it is highly suggested to turn on
                    desktop view and rotate your phone in landscape mode.
                </p>
                <p className="bottom-10">
                    Mobile view is still under development, so please wait for a while~ ♥
                </p>
                <p>
                    If you are using a desktop, then you should enlarge the
                    window a little bit or try zooming it out a little.
                </p>
            </div>
            <Content
                tabState={tabState}
                hideState={hideState}
                setHideState={setHideState}
                setTabState={setTabState}
                background={background}
                sprites={sprites}
                nameTag={nameTag}
                text={text}
                experimental={experimental}
            ></Content>
            {hideState === false && (
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
                    experimental={experimental}
                    setExperimental={setExperimental}
                    nextLayer={nextLayer}
                    setNextLayer={setNextLayer}
                ></Sidebar>
            )}
        </main>
    );
}

export default App;
