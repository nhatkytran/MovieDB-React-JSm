import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const AppContext = createContext();

function useGlobalContext() {
  return useContext(AppContext);
}

function AppProvider({ children }) {
  const [search, setSearch] = useState("spider");
  const [totalMovies, setTotalMovies] = useState(0);
  const [page, setPage] = useState(1);
  const {
    loading,
    error,
    state: movies,
  } = useFetch(search, page, setTotalMovies);
  const value = {
    loading,
    error,
    movies,
    totalMovies,
    search,
    page,
    setSearch,
    setTotalMovies,
    setPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { useGlobalContext };
export default AppProvider;
