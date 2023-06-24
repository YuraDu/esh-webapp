import React, { useEffect, useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="home-container">
      <h1
        className={`animation-text ${isRendered ? "animate" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        esh.
        <div className={`hovered-text ${isHovered ? "show" : ""}`}>
          A new bank is coming
        </div>
      </h1>
    </div>
  );
};

export default Home;
