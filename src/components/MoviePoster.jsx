import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../data";

function MoviePoster() {
  const { movieID } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const [movie, setMovie] = useState({});

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true);
      setError({ show: false, message: "" });

      const res = await fetch(`${API}&i=${movieID}`);

      if (!res.ok) throw new Error("Something went wrong! Please check again");

      const data = await res.json();

      if (data.Response === "True") {
        const { Title: title, Plot: content, Poster: poster, DVD: date } = data;
        const movieInfo = { title, content, poster, date };
        setMovie(movieInfo);
      } else {
        setError({ show: true, message: data.Error });
      }
    } catch (error) {
      console.error("Something went wrong!");
      console.log(error);
      setError({ show: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }, [movieID]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  if (loading)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  if (error.show)
    return (
      <>
        <div style={{ color: "red" }}>{error.message}</div>
        <hr />
        <Link to="/">Home</Link>
      </>
    );

  return (
    <div className="poster">
      <div className="main-poster">
        <div className="image-container">
          <img src={movie.poster} alt="Spiderman" />
        </div>
        <div className="poster-info">
          <h3>{movie.title}</h3>
          <p>{movie.date}</p>
          <p>{movie.content}</p>
        </div>
      </div>
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

export default MoviePoster;
