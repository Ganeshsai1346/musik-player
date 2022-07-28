/** @format */
import { HeartFill, Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../redux/actions";

const Song = ({ track }) => {
  const songs = useSelector((state) => state.songs);

  const dispatch = useDispatch();

  const isFav = songs.includes(track.title);

  const toggleFav = () => {
    isFav
      ? dispatch(removeFromFav(track.title))
      : dispatch(addToFav(track.title));
  };
  return (
    <div
      className="py-3 text-dark text-left d-flex align-baseline song-section"
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
    </div>
  );
};

export default Song;
