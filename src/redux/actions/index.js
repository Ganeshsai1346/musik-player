/** @format */

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const PLAY_SONG = "PLAY_SONG";
export const SONG_SELECTED_BY_ID = "SONG_SELECTED_BY_ID";

export const addToFav = (song) => ({
  type: ADD_TO_FAV,
  payload: song,
});

export const removeFromFav = (song) => ({
  type: REMOVE_FROM_FAV,
  payload: song,
});

export const addToPalylist = (song) => ({
  type: ADD_TO_PLAYLIST,
  payload: song,
});

export const removeFromPalylist = (song) => ({
  type: REMOVE_FROM_PLAYLIST,
  payload: song,
});

export const playSong = (song) => ({
  type: PLAY_SONG,
  payload: song,
});

export const selectSongById = (id) => ({
  type: SONG_SELECTED_BY_ID,
  payload: id,
});
