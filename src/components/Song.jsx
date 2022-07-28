/** @format */
import { HeartFill, Heart, Plus, Check } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToPalylist,
  removeFromFav,
  removeFromPalylist,
} from "../redux/actions";
import "../css/Song.css";

const Song = ({ track }) => {
  let songs = useSelector((state) => state.favouritesReducer.songs);

  const dispatch = useDispatch();

  const isFav = songs.includes(track.id);

  const toggleFav = () => {
    isFav ? dispatch(removeFromFav(track)) : dispatch(addToFav(track));
  };

  let tracks = useSelector((state) => state.playlistReducer.songs);

  const isAdd = tracks.includes(track.id);

  const toggleAdd = () => {
    isAdd
      ? dispatch(removeFromPalylist(track))
      : dispatch(addToPalylist(track));
  };

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
      <span className="card-title px-3 flex-grow-1" style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration flex-end" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
      <span className="ml-3">
        {isAdd ? (
          <Check color="white" fontSize="30px" onClick={toggleAdd} />
        ) : (
          <Plus color="white" fontSize="30px" onClick={toggleAdd} />
        )}
      </span>
    </div>
  );
};

export default Song;
