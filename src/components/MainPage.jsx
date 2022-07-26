/** @format */

import { useState } from "react";
import { Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import "../css/MainPage.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainPage = ({ searchResults }) => {
  const location = useLocation();
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    setMusic([]);
    try {
      const response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
        {
          headers: {
            "X-RapidAPI-Key":
              "85f7b0f089msh4f95fec2293b7cep1ac28fjsn78f6f1885c53",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const songs = result.data;
        setMusic(songs);
      } else {
        console.log("ERROR !!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="all">
      <div id="searchResults">
        {searchResults.length === 0 && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {music &&
              music.map((song) => <AlbumCard song={song} key={song.id} />)}
          </Row>
        )}
        {searchResults.length > 0 && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {searchResults &&
              searchResults.map((song) => (
                <AlbumCard song={song} key={song.id} />
              ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default MainPage;
