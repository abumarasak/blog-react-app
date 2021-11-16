import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./images/singlePost.png" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Khaled</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          debitis dolore numquam natus quisquam deserunt harum assumenda vel
          aspernatur ipsam qui modi quam, deleniti reprehenderit tenetur quasi
          tempore asperiores minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores debitis dolore numquam natus quisquam
          deserunt harum assumenda vel aspernatur ipsam qui modi quam, deleniti
          reprehenderit tenetur quasi tempore asperiores minus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Maiores debitis dolore
          numquam natus quisquam deserunt harum assumenda vel aspernatur ipsam
          qui modi quam, deleniti reprehenderit tenetur quasi tempore asperiores
          minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores debitis dolore numquam natus quisquam deserunt harum assumenda
          vel aspernatur ipsam qui modi quam, deleniti reprehenderit tenetur
          quasi tempore asperiores minus.
        </p>
      </div>
    </div>
  );
}
