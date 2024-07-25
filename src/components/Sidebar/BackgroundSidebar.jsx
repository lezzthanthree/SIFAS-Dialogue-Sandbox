import loadImage from "../../js/loadImage";
import BackgroundPicker from "../BackgroundPicker";

const BackgroundSidebar = ({ background, setBackground }) => {
    return (
        <div id="background-sidebar">
            <div className="group">
                <h1 className="white">Background</h1>

                <BackgroundPicker
                    background={background}
                    setBackground={setBackground}
                />
                <input
                    type="file"
                    id="background-upload"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={async () => {
                        let file =
                            document.getElementById("background-upload")
                                .files[0];
                        const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
                        if (!validImageTypes.includes(file["type"])) {
                            alert("This is not an image!");
                        }
                        if (file) {
                            const imageSrc = URL.createObjectURL(file)
                            const image = await loadImage(imageSrc)
                            setBackground(image)
                        }
                    }}
                />
                <button
                    className="btn-small btn-white w-100 setting"
                    onClick={async () => {
                        await document
                            .getElementById("background-upload")
                            .click();
                    }}
                >
                    Upload Image
                </button>
            </div>
        </div>
    );
};

export default BackgroundSidebar;
