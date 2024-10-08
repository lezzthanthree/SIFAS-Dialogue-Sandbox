import { createContext, useState, useEffect } from "react";
import loadImage from "./js/loadImage";
import chars from "./characters.json";
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
    const [read, setRead] = useState(true);
    const [idDebug, setIdDebug] = useState(false);

    useEffect(() => {
        const checkDate = () => {
            const today = new Date(
                Date.now() + (new Date().getTimezoneOffset() + 540) * 60 * 1000
            );
            // birthday
            const characters = Object.keys(chars);
            for (const c in characters) {
                const char = characters[c];
                const birthday = chars[char].information.birthday;
                const [month, day] = birthday.split("-").map(Number);
                if (today.getMonth() + 1 == month && today.getDate() == day) {
                    return chars[char].birthday;
                }
            }
            // halloween
            if (today.getMonth() + 1 == 10 && !clearTimes) {
                return {
                    name: "Ayumu",
                    id: "ayumu",
                    tag: "Nijigasaki",
                    message: "老人がとなりでじっとみてたよ. ",
                    "background-src": "/img/background_special/halloween.jpg",
                    costume: "17kstk",
                    expression: {
                        eye: 7,
                        mouth: 17,
                    },
                };
            }

            // default
            return {
                name: "Setsuna",
                id: "setsuna",
                tag: "Nijigasaki",
                message: "ermmm... what the sigma?",
                "background-src": "/img/background_special/25ji-sekai.png",
                costume: "0dn3eg",
                expression: {
                    eye: 11,
                    mouth: 9,
                },
            };
        };

        let data = checkDate();

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
        loadImage(data["background-src"], "Changed background")
            .then((img) => setBackground(img))
            .catch((error) => console.error(error));

        loadImage(`/img/char_icon/${data.id}.png`, "Changed character icon")
            .then((img) =>
                setNameTag({
                    primary: colors[0],
                    secondary: colors[1],
                    name: data.name,
                    iconValue: data.id,
                    icon: img,
                    hidden: false,
                    selection: data.tag,
                })
            )
            .catch((error) => console.error(error));

        setText({
            dialogue: data.message,
            hidden: false,
            fontSize: 35,
        });

        Promise.all([
            loadImage(
                `/img/sprites/${data.id}/${data.costume}_0.png`,
                "Changed sprite: body"
            ),
            loadImage(
                `/img/sprites/${data.id}/${data.costume}_1.png`,
                "Changed sprite: face"
            ),
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
                                : 0,
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
