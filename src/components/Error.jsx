import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>No page found!</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
