/** @format */
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  return (
    <div className="player">
      <AudioPlayer className="audio mb-5" controls />
    </div>
  );
};

export default Player;
