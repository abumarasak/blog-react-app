import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="./images/about.png" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptatum distinctio ab nesciunt.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGRIES</span>
        <ul className="sidebarList">
          <li className="sidearListItem">Life</li>
          <li className="sidearListItem">Music</li>
          <li className="sidearListItem">Style</li>
          <li className="sidearListItem">Sport</li>
          <li className="sidearListItem">Tech</li>
          <li className="sidearListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
