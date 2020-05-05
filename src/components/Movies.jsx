import React from "react";
import MovieForm from "./MovieForm";
import Like from "./Like"
import { useSelector } from "react-redux";
export default () => {
  const { loading, error, data } = useSelector(state => state.movies);
  return (
    <div>
      <MovieForm />
      {loading && <p>Loading...</p>}
      {error !== "" && <p>{error}</p>}
      {data.length !== 0 && (
        <ul>
          {data.map(movie => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year}) <Like imdbID={movie.imdbID} />
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};
