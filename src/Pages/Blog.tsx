import React from "react";
import { blogData } from "../config/data";
import { Post } from "./../Components/Post";

import "./Blog.css";

const Blog: React.FC = () => {
  // Use this section if fetching blog data from an API
  // ===============================================
  // const [blogData, setBlogData] = useState([]);

  // useEffect(() => {
  //   // Fetch blog data using Axios
  //   axios
  //     .get("your-api-endpoint")
  //     .then(response => {
  //       setBlogData(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching blog data:", error);
  //     });
  // }, []);
  // ===============================================

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
