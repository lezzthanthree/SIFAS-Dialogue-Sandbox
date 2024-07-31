import React from "react";

const MusicPlayer = () => {
    return (
        <div className="w-100 row">
            <button className="btn-small btn-white right-10">
                <i className="bi bi-pause-fill"></i>
            </button>
            <button className="btn-small btn-white right-10">
                <i className="bi bi-skip-end-fill"></i>
            </button>
        </div>
    );
};

export default MusicPlayer;
