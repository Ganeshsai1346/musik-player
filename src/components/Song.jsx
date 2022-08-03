/** @format */
import { HeartFill, Heart, Plus, Check } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToPalylist,
  playSong,
  removeFromFav,
  removeFromPalylist,
} from "../redux/actions";
import "../css/Song.css";
import { useEffect } from "react";

const Song = ({ track, currentSong }) => {
  let songs = useSelector((state) => state.favouritesReducer.songs);

  const dispatch = useDispatch();

  const isFav = songs.find((s) => s.id === track.id) ? true : false;

  const toggleFav = () => {
    isFav ? dispatch(removeFromFav(track)) : dispatch(addToFav(track));
  };

  let tracks = useSelector((state) => state.playlistReducer.songs);

  const isAdd = tracks.find((s) => s.id === track.id) ? true : false;

  const toggleAdd = () => {
    isAdd
      ? dispatch(removeFromPalylist(track))
      : dispatch(addToPalylist(track));
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  useEffect(() => {
    console.log(tracks);
  }, [tracks]);
  return (
    <div
      className="py-3 text-dark text-left d-flex song-section"
      style={{ fontSize: "20px" }}>
      <span style={{ color: "white" }}>
        {isFav ? (
          <HeartFill color="green" onClick={toggleFav} />
        ) : (
          <Heart color="white" onClick={toggleFav} />
        )}
      </span>
      <span
        className="card-title px-3 flex-grow-1"
        style={{ color: "white" }}
        onClick={() => dispatch(playSong(track))}>
        {track.title}
      </span>
      <small className="duration px-5" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
      <span className="px-3 text-white playlist">
        {isAdd ? (
          <>
            <Check color="white" fontSize="30px" onClick={toggleAdd} />{" "}
            <span></span>
          </>
        ) : (
          <>
            <Plus color="white" fontSize="30px" onClick={toggleAdd} />{" "}
            <span></span>
          </>
        )}
      </span>
      <span className="px-5 text-white ">
        <a draggable="false" href={track.link}>
          <svg
            role="img"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            className="download-link">
            <path
              d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
              fill="currentColor"></path>
          </svg>
        </a>
      </span>
    </div>
  );
};

export default Song;
