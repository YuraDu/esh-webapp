import React from "react";
import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../config/data";

import "./Post.css";

export const Post: FC = () => {
  const { id } = useParams();

  const post = blogData.posts.find(post => {
    return post.id === Number(id);
  });

  return (
    <div className="post-container">
      <Link to="/blog" className="back-button">
        &lt; Back
      </Link>
      <h2>{post?.title}</h2>
      <p className="post-meta">
        Published on {post?.date} by {post?.author}
      </p>
      <p className="post-content post-subtitle">{post?.postContent}</p>
      {post?.content.map((p, index) => (
        <p className="post-content" key={index}>
          {p}
        </p>
      ))}
    </div>
  );
};
