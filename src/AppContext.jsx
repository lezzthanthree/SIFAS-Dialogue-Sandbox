import { createContext, useState, useEffect } from "react";
import loadImage from "./js/loadImage";
import "./css/main.css";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [hideState, setHideState] = useState(false);
    const [tabState, setTabState] = useState("background");
    const [background, setBackground] = useState(null);
    const [nameTag, setNameTag] = useState(null);
    const [text, setText] = useState({
        dialogue: "kyou no pan ga umai!",
        hidden: false,
        fontSize: 35,
    });
    const [sprites, setSprites] = useState(null);
    const [experimental, setExperimental] = useState({
        fontOffset: 0,
        shadow: true,
    });
    const [nextLayer, setNextLayer] = useState(2);
    const [clearTimes, setClearTimes] = useState(0);
    const [read, setRead] = useState(false);
    sessionStorage.setItem("dictionary", {
        Test: "test again",
    });

    useEffect(() => {
        setSprites(null);
        loadImage("/img/background/6olyyw_0.jpg")
            .then((img) =>
                setBackground({
                    img: img,
                    id: "6olyyw_0.jpg",
                })
            )
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

        setText({
            dialogue: "kyou no pan ga umai!",
            hidden: false,
            fontSize: 35,
        });

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

        setNextLayer(2);
    }, [clearTimes]);

    return (
        <AppContext.Provider
            value={{
                hideState,
                setHideState,
                tabState,
                setTabState,
                background,
                setBackground,
                nameTag,
                setNameTag,
                text,
                setText,
                sprites,
                setSprites,
                experimental,
                setExperimental,
                nextLayer,
                setNextLayer,
                read,
                setRead,
                clearTimes,
                setClearTimes,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
