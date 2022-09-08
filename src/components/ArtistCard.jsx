/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ArtistCard.css";

const ArtistCard = ({ song }) => {
  const [artist, setArtist] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/lovely`,
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
        console.log("ERROR!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col text-center " id={song.id}>
      <Link to={"/artist/" + song.artist.id}>
        <div>
          <img
            className="img-fluid art-img"
            src={artist.picture_medium}
            alt="1"
          />
        </div>
      </Link>
    </div>
  );
};

export default ArtistCard;
