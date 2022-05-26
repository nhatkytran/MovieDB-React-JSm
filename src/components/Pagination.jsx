import { useGlobalContext } from "../context/AppProvider";

function Pagination() {
  const { page, setPage, totalMovies } = useGlobalContext();
  const totalPages = Math.ceil(totalMovies / 10);

  return (
    <div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(1)}>
          Start
        </button>
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Prev
        </button>
        <span className="page">{page}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
        >
          End
        </button>
      </div>
      <p>Total pages: {totalPages}</p>
    </div>
  );
}

export default Pagination;
