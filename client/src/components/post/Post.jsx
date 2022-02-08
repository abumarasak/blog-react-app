import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="posts">
      <div>
        {post.photo && (
          <img src={PF + post.photo} alt={post.title} className="postImg" />
        )}
        <div className="postInfo">
          <div className="postCats">
            {post.categories?.map((cat, index) => (
              <Link to={`/?cat=${cat}`} className="link" key={index}>
                <span className="postCat">{cat}</span>
              </Link>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}
