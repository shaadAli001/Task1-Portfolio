import React from "react";
import "../Menu/Menu.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { BsProjectorFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="\src\image\Shaad2Photo.png" alt="Profile Pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="techStack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <BsProjectorFill />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    to="award"
                  >
                    <FaAward style={{ color: "#a8a632" }} />
                    Achivements
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    to="contact"
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReading />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsProjectorFill />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  to="award"
                >
                  <FaAward style={{ color: "#a8a632" }} />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  to="contact"
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
