import React from "react";
import { useParams } from "react-router-dom";

interface IPostProps {
  postId: number;
}

const Post: React.FC<IPostProps> = ({ postId }) => {
  // const history = useHistory();

  const handleRemovePost = () => {
    // Implement your logic to remove the post here
    // You can use the postId to identify the post to remove
    // After removing the post, navigate back to the blog page
    // history.push("/blog");
  };

  const handleEditPost = () => {
    // Implement your logic to edit the post here
    // You can use the postId to identify the post to edit
    // Redirect to the edit post page, passing the postId as a parameter
    // history.push(`/edit-post/${postId}`);
  };

  return (
    <div>
      <h2>Post {postId}</h2>
      <p>This is the content of post {postId}.</p>

      <button onClick={handleRemovePost}>Remove Post</button>
      <button onClick={handleEditPost}>Edit Post</button>
    </div>
  );
};

export default Post;
