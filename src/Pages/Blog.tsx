import React from "react";
import { blogData } from "../config/data";
import { Post } from "./../Components/Post";

const Blog: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {blogData.posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Blog;
