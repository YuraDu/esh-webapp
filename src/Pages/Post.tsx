import React from "react";
import { useParams } from "react-router-dom";

interface IPostProps {
  postId: number;
}

const Post: React.FC<IPostProps> = ({ postId }) => {
  return (
    <div>
      <h2>Post {postId}</h2>
      <p>This is the content of post {postId}.</p>
    </div>
  );
};

export default Post;
