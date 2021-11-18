import "./topbar.css";
import { Link } from "react-router-dom";

export default function topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList ">
          <li className="topListItem ">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="/images/khaled.png" alt="" />
        ) : (
          <ul className="topList ">
            <li className="topListItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
