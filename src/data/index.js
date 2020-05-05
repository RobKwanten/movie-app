import { createStore, applyMiddleware, combineReducers } from "redux";
import moviesReducer from "./movies";
import thunk from "redux-thunk";
import logger from "redux-logger";
import likedMoviesReducer from "./likedMovies";

export default createStore(
  combineReducers({
    movies: moviesReducer,
    likedMovies: likedMoviesReducer
  }),
  applyMiddleware(thunk, logger)
);
