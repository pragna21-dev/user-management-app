import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getCommentsByPost, getUserPost } from "../services/userService";
import { useEffect, useState } from "react";


const UserPosts = () => {
  const { id } = useParams();
  const location = useLocation();
  const userName = location.state?.name;

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [loadingPost, setLoadingPost] = useState(false);

  useEffect(() => {
    loadPosts();
    console.log(id);
  }, [id]);

  const loadPosts = async () => {
    setLoadingPost(true);
    const data = await getUserPost(id);
    setPosts(data);
    setLoadingPost(false);
  };
  const loadComments = async (postId) => {
    const data = await getCommentsByPost(postId);
    setComments({ [postId]: data });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <button className="btn btn-light border" onClick={() => navigate("/")}>
          ← Back
        </button>
        <h4 className="mb-4 text-center"> {userName}'s Posts</h4>
        <span className="badge custom-badge">{posts.length} Posts</span>
      </div>
      <div className="container mt-4">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="card p-3 mb-3 shadow-sm">
              <h5>{post.title}</h5>
              <p className="text-muted">{post.body}</p>
              <div className="d-flex justify-content-end align-items-center  pt-2 mt-3">
                <button
                  className="btn btn-sm btn-outline-primary mb-3"
                  onClick={() => loadComments(post.id)}
                >
                  💬 Show Comments
                </button>
              </div>
              {/* <div className="d-flex justify-content-end align-items-center border-top pt-2 mt-3">
                <span
                  className="text-primary cursor-pointer"
                  style={{ cursor: "pointer" }}
                    onClick={() => loadComments(post.id)}
                >
                  💬 {comments[post.id]?.length || 0}  Comments
                  💬  Comments
                </span>
              </div> */}
              {/* Comments */}
              {comments[post.id] && (
                <div className="border-top pt-3">
                  <h6 className="mb-3">
                    💬 Comments ({comments[post.id].length})
                  </h6>
                  <div className="comments-box">
                    {comments[post.id].map((c) => (
                      <div key={c.id} className="bg-light  p-2 mb-2 rounded">
                        <strong>{c.name}</strong>
                        <br />
                        <small className="text-muted">{c.email}</small>
                        <p className="mb-0">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};
export default UserPosts;
