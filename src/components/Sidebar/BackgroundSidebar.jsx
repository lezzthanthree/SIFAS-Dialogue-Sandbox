import loadImage from "../../js/loadImage";
import BackgroundPicker from "../BackgroundPicker";
import UploadImageButton from "../UploadImageButton";

const BackgroundSidebar = ({ background, setBackground }) => {
    return (
        <div id="background-sidebar">
            <div className="group">
                <h1 className="white">Background</h1>

                <BackgroundPicker
                    background={background}
                    setBackground={setBackground}
                />
                <UploadImageButton
                    id="background-upload"
                    uploadFunction={async (file) => {
                        const imageSrc = URL.createObjectURL(file);
                        const image = await loadImage(imageSrc);
                        setBackground(image);
                    }}
                    text={
                        <>
                            <i className="bi bi-upload right-10"> </i>
                            Background
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default BackgroundSidebar;
