import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import { Post } from "./Pages/Post";
import Navbar from "./Components/Navbar";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslation from "./Translation/English/translation.json";
import hebrewTranslation from "./Translation/Hebrew/translation.json";
import russianTranslation from "./Translation/Russian/translation.json";
import Footer from "./Components/Footer";

const resources = {
  eng: { translation: englishTranslation },
  heb: { translation: hebrewTranslation },
  rus: { translation: russianTranslation },
};

i18next.use(initReactI18next).init({ resources, lng: "eng" });

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
