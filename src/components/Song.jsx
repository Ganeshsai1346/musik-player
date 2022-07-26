/** @format */

const Song = ({ track }) => {
  return (
    <div
      className="py-3 text-dark text-left d-flex align-baseline song-section"
      style={{ fontSize: "20px" }}>
      <span style={{ color: "white" }}>
        <i className="bx bx-heart"></i>
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
