import { useNavigate, useParams } from "react-router-dom";
import { getUserPost } from "../services/userService";
import { useEffect, useState } from "react";
const navigate = useNavigate;
const UserPosts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadPosts();
    console.log(id);
  }, [id]);

  const loadPosts = async () => {
    const data = await getUserPost(id);
    setPosts(data);
  };
  return (
    <>
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="container mt-4">
        <h3 className="mb-4">User {id} Posts</h3>
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="card p-3 mb-3 shadow-sm">
              <h5>{post.title}</h5>
              <p className="text-muted">{post.body}</p>
              <div className="d-flex justify-content-end align-items-center border-top pt-2 mt-3">
                <span
                  className="text-primary cursor-pointer"
                  style={{ cursor: "pointer" }}
                //   onClick={() => loadComments(post.id)}
                >
                  {/* 💬 {comments[post.id]?.length || 0} */}
                   0 Comments
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default UserPosts;
