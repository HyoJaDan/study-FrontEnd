import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovies(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movies.medium_cover_image} />
          <div>{movies.title}</div>
          <div>{movies.year}</div>
          <div>{movies.runtime}</div>
          <div>{movies.description_full}</div>
          <div>{movies.url}</div>
        </div>
      )}
    </div>
  );
}
export default Detail;
