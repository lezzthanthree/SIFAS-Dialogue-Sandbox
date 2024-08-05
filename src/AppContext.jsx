import { createContext, useState, useEffect } from "react";
import loadImage from "./js/loadImage";
import data from "./characters.json";
import "./css/main.css";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const savedOffset = localStorage.getItem("fontOffset");
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
        fontOffset: savedOffset ? savedOffset : 0,
        shadow: true,
    });
    const [nextLayer, setNextLayer] = useState(2);
    const [clearTimes, setClearTimes] = useState(0);
    const [read, setRead] = useState(false);
    sessionStorage.setItem("dictionary", {
        Test: "test again",
    });
    const [idDebug, setIdDebug] = useState(false);
    const checkBirthday = () => {
        const today = new Date(
            Date.now() + (new Date().getTimezoneOffset() + 540) * 60 * 1000
        );
        const characters = Object.keys(data);
        for (const c in characters) {
            const char = characters[c];
            const birthday = data[char].information.birthday;
            const [month, day] = birthday.split("-").map(Number);
            if (today.getMonth() + 1 == month && today.getDate() == day) {
                return data[char].birthday;
            }
        }
        return null;
    };
    useEffect(() => {
        let data = checkBirthday();

        if (!data) {
            data = {
                name: "Lanzhu",
                id: "lanzhu",
                tag: "Nijigasaki",
                message: "she's just like me fr.",
                "background-src": "/img/background_special/GUIrAt8acAABVbO.jpg",
                costume: "p4sunk",
                expression: {
                    eye: 1,
                    mouth: 7,
                },
            };
        }

        let colors;
        switch (data.tag) {
            case "μ's":
                colors = ["#ff79cd", "#ffcdec"];
                break;
            case "Aqours":
                colors = ["#7bc8ff", "#cdeaff"];
                break;
            case "Nijigasaki":
                colors = ["#ffed45", "#fff8b7"];
                break;
            default:
                colors = ["#ff79cd", "#ffcdec"];
                break;
        }

        setSprites(null);
        loadImage(data["background-src"])
            .then((img) => setBackground(img))
            .catch((error) => console.error(error));

        loadImage(`/img/char_icon/${data.id}.png`)
            .then((img) =>
                setNameTag({
                    primary: colors[0],
                    secondary: colors[1],
                    name: data.name,
                    iconValue: data.id,
                    icon: img,
                    hidden: false,
                })
            )
            .catch((error) => console.error(error));

        setText({
            dialogue: data.message,
            hidden: false,
            fontSize: 35,
        });

        Promise.all([
            loadImage(`/img/sprites/${data.id}/${data.costume}_0.png`),
            loadImage(`/img/sprites/${data.id}/${data.costume}_1.png`),
        ])
            .then(([bodyImage, expressionImage]) => {
                setSprites({
                    "sprite-layer-1": {
                        layerName: `Layer 1: ${data.name}`,
                        layerNumber: 1,
                        character: data.id,
                        costume: data.id,
                        position: "front",
                        bodyImage: bodyImage,
                        expressionImage: expressionImage,
                        expression: {
                            eye: data.expression.eye,
                            mouth: data.expression.mouth,
                        },
                        options: {
                            x: data["background-src"].includes("birthday")
                                ? 520
                                : 520,
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
                idDebug,
                setIdDebug,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
