import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MoviePoster from "./components/MoviePoster";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieID" element={<MoviePoster />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
