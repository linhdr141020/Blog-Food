import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:8081/images/";

  return (
    <div className="post">
      <img className="postImg" src={PF + post.photo} alt="" />
      <div className="postInfo">
        <div className="postCats"></div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <div className="info">
          <div className="author">{post.username}</div>
          <div className="postDate">
            {new Date(post.createdAt).toDateString()}
          </div>
        </div>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
export default Post;
