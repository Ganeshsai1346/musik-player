/** @format */

export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const addToFav = (song) => ({
  type: ADD_TO_FAV,
  payload: song,
});

export const removeFromFav = (song) => ({
  type: REMOVE_FROM_FAV,
  payload: song,
});
