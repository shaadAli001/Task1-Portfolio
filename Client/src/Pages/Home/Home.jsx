import React from "react";
import "../Home/home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/ShaadResume.pdf";
import { useTheme } from "../../Context/ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaMoon size={30} /> : <LuSun size={30} />}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["MERN Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <div className="btn btn-hire">Hire Me</div>
              <a
                href={Resume}
                download="ShaadResume.pdf"
                className="btn btn-cv"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
