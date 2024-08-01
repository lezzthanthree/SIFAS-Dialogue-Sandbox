import { useState, useEffect } from "react";
import data from "../bgm.json";

const MusicPlayer = () => {
    const getRandom = () => {
        const list = data.bgm;
        const index = Math.floor(Math.random() * list.length);

        return `/snd/bgm/${list[index]}`;
    };

    const setUpAudio = (file) => {
        let current;
        if (!file) {
            current = new Audio();
            current.src = getRandom();
        } else {
            current = player.current;
            current.src = file;
        }

        current.volume = 0.2;

        return current;
    };

    const [player, setPlayer] = useState({
        playing: false,
        current: setUpAudio(null),
    });

    const toggle = () => {
        player.playing ? player.current.pause() : player.current.play();
        setPlayer({
            ...player,
            playing: !player.playing,
        });
    };

    const nextSong = () => {
        const current = setUpAudio(getRandom());
        // player.current.pause();

        setPlayer({
            playing: true,
            current: current,
        });

        player.current.load();
        player.current.play();
        console.log(player);
    };

    useEffect(() => {
        player.current.addEventListener("ended", () => {
            nextSong();
        });
    }, []);

    return (
        <div className="w-100 row">
            <button
                className="btn-small btn-white right-10"
                onClick={() => toggle()}
            >
                {player.playing && <i className="center bi bi-pause-fill"></i>}
                {!player.playing && <i className="center bi bi-play-fill"></i>}
            </button>
            <button
                className="btn-small btn-white right-10"
                onClick={() => nextSong()}
            >
                <i className="center bi bi-skip-end-fill"></i>
            </button>
        </div>
    );
};

export default MusicPlayer;
