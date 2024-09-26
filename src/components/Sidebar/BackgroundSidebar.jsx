import { useContext } from "react";
import loadImage from "../../js/loadImage";
import BackgroundPicker from "../BackgroundPicker";
import UploadImageButton from "../UploadImageButton";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";

const BackgroundSidebar = () => {
    const { background, setBackground } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <div id="background-sidebar">
            <div className="group">
                <h1 className="white"> {t("background-header")}</h1>

                <BackgroundPicker
                    background={background}
                    setBackground={setBackground}
                />
                <UploadImageButton
                    id="background-upload"
                    uploadFunction={async (file) => {
                        const imageSrc = URL.createObjectURL(file);
                        const image = await loadImage(imageSrc, "Changed sprite: background");
                        setBackground(image);
                    }}
                    text={
                        <>
                            <i className="bi bi-upload right-10"> </i>
                            {t("background-upload")}
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default BackgroundSidebar;
