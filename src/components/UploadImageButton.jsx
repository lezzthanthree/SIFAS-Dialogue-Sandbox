import { useRef } from "react";

const UploadImageButton = ({ id, uploadFunction, text, alertMsg }) => {
    const uploadElement = useRef(null);
    const checkFile = (file) => {
        const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!validImageTypes.includes(file["type"])) {
            alert("This is not an image!");
            return false;
        }
        return true;
    };
    return (
        <>
            <input
                ref={uploadElement}
                type="file"
                id={id}
                style={{ display: "none" }}
                accept="image/*"
                onChange={async () => {
                    let file = uploadElement.current.files[0];
                    if (file && checkFile(file)) {
                        uploadFunction(file);
                    }
                }}
            />
            <button
                id={`btn-${id}`}
                className="btn-small btn-white w-100 setting"
                onClick={async () => {
                    if (alertMsg) {
                        alert(alertMsg);
                    }
                    await uploadElement.current.click();
                }}
            >
                {text}
            </button>
        </>
    );
};

export default UploadImageButton;
