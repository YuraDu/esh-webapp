import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post postId={0} />} />
      </Routes>
    </>
  );
}

export default App;
