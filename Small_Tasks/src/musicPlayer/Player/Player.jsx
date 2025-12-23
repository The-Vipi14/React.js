import { useState, useRef } from "react";

import song from "../musicAssets/music/Bhor_Bhayi_.mp3";

const Player = () => {

  const playingMusicRef = useRef();
  const [progress, setprogress] = useState(0);
  
  const musicTime = () => {
    const current = playingMusicRef.current.currentTime;
    const duration = playingMusicRef.current.duration || 0;
    setprogress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const duration = playingMusicRef.current.duration;
    playingMusicRef.current.currentTime = (e.target.value / 100) * duration;
  };

  return (
    <>

      <div className="h-30 bg-amber-200 flex justify-center items-center gap-4">
        <audio ref={playingMusicRef} onTimeUpdate={musicTime} src={song} />
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-[500px]"
        />


        <button
          onClick={() => playingMusicRef.current.play()}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          ▶ Play
        </button>

        <button
          onClick={() => playingMusicRef.current.pause()}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          ⏸ Pause
        </button>
      </div>
    </>
  );
};

export default Player;
