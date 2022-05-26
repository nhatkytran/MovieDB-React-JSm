import { Link } from "react-router-dom";

function Movie({ Title: title, Poster: poster, imdbID: id }) {
  return (
    <Link
      to={`/movies/${id}`}
      className="movie"
      style={{
        backgroundImage: `url(${
          poster !== "N/A"
            ? poster
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"
        })`,
      }}
    >
      <div className="overlay">
        <h4 className="movie-name">{title}</h4>
      </div>
    </Link>
  );
}

export default Movie;
