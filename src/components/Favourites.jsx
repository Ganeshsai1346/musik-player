/** @format */

import { Col, Container, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../redux/actions";

const Favourites = () => {
  const songs = useSelector((state) => state.songs);

  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <div>
            {songs &&
              songs.map((track, i) => (
                <div key={i} className="d-flex ">
                  <HeartFill
                    color="green"
                    fontSize="20px"
                    onClick={() => dispatch(removeFromFav(track))}
                  />
                  <span style={{ color: "white", fontSize: "20px" }}>
                    {track}
                  </span>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
