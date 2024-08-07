import { useContext } from "react";
import { AppContext } from "../AppContext";

const Announcement = () => {
    const { read, setRead } = useContext(AppContext);

    if (!read) {
        return (
            <div
                className="absolute bottom-left justify-center white column fixed-bottom-left w-100"
                id="mobile"
                onClick={() => {
                    setRead(true);
                }}
            >
                <p className="bottom-10">
                    SIFAS Dialogue Sandbox now has two links.
                </p>
                <a
                    href="https://sifas-dialogue-sandbox.vercel.app/"
                    className="text-orange"
                >
                    Vercel App
                </a>
                <a
                    href="https://sifas-dialogue-sandbox.netlify.app/"
                    className="text-orange bottom-10"
                >
                    Netlify App
                </a>
                <p>Tap this section to close.</p>
            </div>
        );
    }
    return;
};

export default Announcement;
