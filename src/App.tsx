import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
