import { FC } from "react";
import { useParams } from "react-router-dom";
import { PostData, blogData } from "../config/data";

export const Post: FC = () => {
  const { id } = useParams();

  const post = blogData.posts.find(post => {
    return post.id === Number(id);
  });

  return (
    <div>
      <h2>Post {id}</h2>
      <p>This is the content of post {id}.</p>
    </div>
  );
};
