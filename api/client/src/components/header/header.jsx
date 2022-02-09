import "./header.css";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node </span>
        <span className="headerTitleLg">Blog </span>
      </div>
      <img src="./images/header.png" alt="" className="headerImg" />
    </div>
  );
}
