import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "../Layout/Lyout.css";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // change Toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
