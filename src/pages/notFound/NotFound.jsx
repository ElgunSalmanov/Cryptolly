import notfound from "../../assets/gif/404.gif";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found-image" src={notfound} alt="404 Not Found" />
    </div>
  );
}

export default NotFound;
