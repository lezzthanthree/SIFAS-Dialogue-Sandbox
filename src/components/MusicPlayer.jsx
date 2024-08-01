import { useState } from "react";
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
        current.addEventListener("ended", () => {
            nextSong();
        });

        return current;
    };

    const [player, setPlayer] = useState({
        playing: false,
        current: setUpAudio(null),
        next: getRandom(),
    });

    const toggle = () => {
        player.playing ? player.current.pause() : player.current.play();
        setPlayer({
            ...player,
            playing: !player.playing,
        });
    };

    const nextSong = () => {
        const current = setUpAudio(player.next);
        // player.current.pause();

        setPlayer({
            playing: true,
            current: current,
            next: getRandom(),
        });

        player.current.load();
        player.current.play();
        console.log(player);
    };

    return (
        <div className="w-100 row">
            <button
                className="btn-small btn-white right-10"
                onClick={() => toggle()}
            >
                {player.playing && <i className="bi bi-pause-fill"></i>}
                {!player.playing && <i className="bi bi-play-fill"></i>}
            </button>
            <button
                className="btn-small btn-white right-10"
                onClick={() => nextSong()}
            >
                <i className="bi bi-skip-end-fill"></i>
            </button>
        </div>
    );
};

export default MusicPlayer;
