import { Link } from "react-router-dom";
export default function Post({ post }) {
  return (
    <>
      <div class="card mb-4">
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <img
              class="img-fluid h-100 card-img-top"
              src={post.image}
              alt="..."
            />
          </div>
          <div class="card-body col-md-8">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.content.substr(0, 50)}...</p>
            <Link to= {`/posts/${post._id}`}class="btn" style={{background: "#8B4513", color: "white"}}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
