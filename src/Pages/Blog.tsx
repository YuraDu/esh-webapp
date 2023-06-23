import React from "react";
import { blogData } from "../config/data";
import { Post } from "./../Components/Post";

import "./Blog.css";

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      {blogData.posts.map((post, index) => (
        <Post
          id={post.id}
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.postContent}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Blog;
