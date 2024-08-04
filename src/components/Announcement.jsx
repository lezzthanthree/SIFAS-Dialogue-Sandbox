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
                <p className="bottom-10">Font Offset is now saved locally. </p>
                <p>Tap this section to close.</p>
            </div>
        );
    }
    return;
};

export default Announcement;
