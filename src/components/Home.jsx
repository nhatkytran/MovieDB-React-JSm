import { useGlobalContext } from "../context/AppProvider";
import Search from "./Search";
import Movies from "./Movies";
import Pagination from "./Pagination";

function Home() {
  const { movies } = useGlobalContext();

  return (
    <div className="home">
      <div>
        <h1>Movie DB</h1>
      </div>
      <hr />
      <Search />
      {movies.length > 0 && <Pagination />}
      <hr />
      <Movies movies={movies} />
    </div>
  );
}

export default Home;
