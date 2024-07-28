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
    const [text, setText] = useState({
        dialogue: "kyou no pan ga umai!",
        hidden: false,
    });
    const [sprites, setSprites] = useState(null);
    const [experimental, setExperimental] = useState({
        textOffset: 0,
        shadow: true,
    });
    const [nextLayer, setNextLayer] = useState(2);
    const [iOS, setiOS] = useState(false);
    const [read, setRead] = useState(false);

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
                        position: "front",
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

        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !window.MSStream) {
            setiOS(true);
        }
    }, []);
    return (
        <main>
            {iOS && !read && (
                <div
                    className="absolute top-left justify-center white column w-100 fixed-0-0"
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
                        <a href="https://github.com/lezzthanthree/SIFAS-Dialogue-Sandbox" className="white text-orange">
                            GitHub
                        </a>
                        .
                    </p>
                    <p>Tap this section to close.</p>
                </div>
            )}

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
