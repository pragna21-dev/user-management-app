import { useNavigate, useParams } from "react-router-dom";
import { getCommentsByPost, getUserPost } from "../services/userService";
import { useEffect, useState } from "react";

const UserPosts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    loadPosts();
    console.log(id);
  }, [id]);

  const loadPosts = async () => {
    const data = await getUserPost(id);
    setPosts(data);
  };
  const loadComments = async (postId) => {
    const data = await getCommentsByPost(postId);
    setComments({ [postId]: data });
  };
const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="container mt-4">
        <h3 className="mb-4">User {id} Posts</h3>
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
