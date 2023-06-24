import React, { useEffect, useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className="home-container">
      <h1 className={`animation-text ${isRendered ? "animate" : ""}`}>esh.</h1>
    </div>
  );
};

export default Home;
