import { useCallback, useEffect, useState } from "react";
import { API } from "../data";

function useFetch(search, page, setTotalMovies) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const [state, setState] = useState([]);
  const fetchAPI = useCallback(
    async (url) => {
      try {
        setLoading(true);
        setError({ show: false, message: "" });

        const res = await fetch(
          `${url}&s=${search ? search : "spider"}&page=${page}`
        );

        if (!res.ok)
          throw new Error("Something went wrong! Please check again");

        const data = await res.json();

        if (data.Response === "True") {
          setState(data.Search);
          setTotalMovies(Number.parseInt(data.totalResults));
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
    },
    [page, search, setTotalMovies]
  );

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      fetchAPI(API);
    }, 200);

    return () => clearTimeout(timeout);
  }, [page, search, fetchAPI]);

  return {
    loading,
    error,
    state,
  };
}

export default useFetch;
