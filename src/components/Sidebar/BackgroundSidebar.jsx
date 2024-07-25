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
                <button className="btn-small btn-white w-100 setting">
                    Upload Image
                </button>
            </div>
        </div>
    );
};

export default BackgroundSidebar;
