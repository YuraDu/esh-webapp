import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

interface IPostProps {
  id: number;
  date: string;
  author: string;
  title: string;
  content: string;
  image: string;
}

export const Post: React.FC<IPostProps> = ({
  id,
  date,
  author,
  title,
  content,
  image,
}) => {
  return (
    <Link to={`/post/${id}`}>
      <div className="post-card">
        <img className="post-image" src={image} alt="Post Image" />
        <div className="post-content">
          <p className="post-subtitle">{`${date} · ${author}`}</p>
          <h2 className="post-title">{title}</h2>
          <p className="post-description">{content}</p>
        </div>
      </div>
    </Link>
  );
};
