/** @format */

import { Col, Container, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../redux/actions";
import "../css/Favourites.css";
const Favourites = () => {
  const songs = useSelector((state) => state.favouritesReducer.songs);

  const dispatch = useDispatch();
  return (
    <Row>
      {songs &&
        songs.map((track, i) => (
          <Col md={2} className="mt-5">
            <div className="d-flex flex-column">
              <img
                src={track.album.cover_medium}
                alt=""
                className="album-img"
              />
              <div style={{ color: "white", fontSize: "20px" }}>
                <span className="mr-3">
                  <HeartFill
                    color="green"
                    fontSize="20px"
                    onClick={() => dispatch(removeFromFav(track))}
                  />
                </span>
                <span style={{ color: "white", fontSize: "15px" }}>
                  Song:&nbsp;{track.title}
                </span>
              </div>
              <span style={{ color: "white", fontSize: "15px" }} className="">
                Artist:&nbsp;{track.artist.name}
              </span>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default Favourites;
