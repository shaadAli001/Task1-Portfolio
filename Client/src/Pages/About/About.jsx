import React from "react";
import "../About/About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-md-4col-lg-4 col-xl-4 col-xs-12  about-img">
            <img src="\src\image\Shaad2Photo.png" alt="Profile Pic" />
          </div>
          <div className="col-md-5 about-content">
            <h1>About Me</h1>
            <p>
              I am dedicated MERN Stack Developer with expertise in MongoDB,
              Express.js, React, and Node.js. He specializes in building
              dynamic, user-friendly web applications that offer exceptional
              performance and seamless experiences. With a strong focus on
              clean, maintainable code, Shaad excels in collaborative
              environments, contributing to projects from inception to
              deployment. His skills include integrating RESTful APIs,
              optimizing database queries, and implementing responsive designs
              for various devices. Always eager to learn, Shaad stays updated on
              industry trends and best practices, enhancing his problem-solving
              abilities and innovative mindset. Passionate about technology, he
              enjoys participating in coding challenges and sharing knowledge
              within the developer community. With a blend of technical skills
              and creativity, Shaad is ready for new opportunities in web
              development.
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default About;
