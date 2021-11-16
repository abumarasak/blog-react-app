import "./post.css";

export default function Post() {
  return (
    <div className="posts">
      <div>
        <img src="./images/post.png" alt="" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem 0ipsum dolor sit amet.</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          asperiores necessitatibus aliquam, reprehenderit accusantium ab dolor!
          Corrupti, obcaecati vero doloremque animi ut hic asperiores
          consectetur deserunt sed eos eaque eveniet. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Mollitia asperiores necessitatibus
          aliquam, reprehenderit accusantium ab dolor! Corrupti, obcaecati vero
          doloremque animi ut hic asperiores consectetur deserunt sed eos eaque
          eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Mollitia asperiores necessitatibus aliquam, reprehenderit accusantium
          ab dolor! Corrupti, obcaecati vero doloremque animi ut hic asperiores
          consectetur deserunt sed eos eaque eveniet. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Mollitia asperiores necessitatibus
          aliquam, reprehenderit accusantium ab dolor! Corrupti, obcaecati vero
          doloremque animi ut hic asperiores consectetur deserunt sed eos eaque
          eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Mollitia asperiores necessitatibus aliquam, reprehenderit accusantium
          ab dolor! Corrupti, obcaecati vero doloremque animi ut hic asperiores
          consectetur deserunt sed eos eaque eveniet.
        </p>
      </div>
    </div>
  );
}
