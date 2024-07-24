const BackgroundSidebar = ({ background, setBackground }) => {
    return (
        <div
            id="background-sidebar"
        >
            <div className="group">
                <h1 className="white">Background</h1>
                <img
                    src={background ? background.src : ""}
                    alt=""
                    className="image-picker setting"
                />
                <button className="btn-small btn-white w-100 setting">
                    Upload Image
                </button>
            </div>
        </div>
    );
};

export default BackgroundSidebar;
