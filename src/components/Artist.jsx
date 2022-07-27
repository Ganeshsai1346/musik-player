/** @format */
/** @format */

import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../css/Artist.css";

const Artist = () => {
  const [artist, setArtist] = useState([]);

  const artistId = useParams().id;

  useEffect(() => {
    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistId]);

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
          },
        }
      );

      if (response.ok) {
        const artist = await response.json();
        console.log(artist);
        setArtist(artist);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col md={6}>
        <div className="col-12 col-md-10 col-lg-10 mt-5">
          <img src={artist.picture} alt="artist-img" />
          <h2 className="titleMain">{artist.name}</h2>
          <div id="followers">{artist.nb_fan} followers</div>
          <div className="d-flex justify-content-center" id="button-container">
            <button className="btn btn-success mr-2 mainButton" id="playButton">
              <span></span>
            </button>
            <button
              className="btn btn-outline-light mainButton"
              id="followButton">
              FOLLOW
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Artist;
