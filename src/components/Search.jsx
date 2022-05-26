import { useGlobalContext } from "../context/AppProvider";

function Search() {
  const { search, setSearch, setPage } = useGlobalContext();

  function handleSearch(event) {
    setSearch(event.target.value);
    setPage(1);
  }

  return (
    <div className="search">
      <input type="text" value={search} onChange={handleSearch} />
      <p>Happy filming 😁 - Search now!</p>
    </div>
  );
}

export default Search;
