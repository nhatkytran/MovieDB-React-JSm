import { useGlobalContext } from "../context/AppProvider";
import Movie from "./Movie";

function Movies({ movies }) {
  const { loading, error } = useGlobalContext();

  if (loading)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  if (error.show) return <div style={{ color: "red" }}>{error.message}</div>;

  return (
    <div className="movies">
      {movies.map((movie, index) => {
        return <Movie key={index} {...movie} />;
      })}
    </div>
  );
}

export default Movies;
