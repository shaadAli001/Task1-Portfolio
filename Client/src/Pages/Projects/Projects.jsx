import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <div className="row">
          <div className="col-3"></div>
          <p className="pb-3 col-7">
            1.Hotel Booking: A user-friendly platform that connects travelers
            with unique accommodations. Features include intuitive search,
            booking management, and user reviews, making it easy to find and
            reserve the perfect stay. <br /> <br />
            2. Expense Tracker: An intuitive app designed to help users monitor
            and manage their expenses effortlessly. With customizable
            categories, visual reports, and budget-setting features, it empowers
            users to take control of their finances and make informed spending
            decisions.
          </p>
          <div className="col-2"></div>
        </div>
        {/* card */}
        <div className="row mt-5" id="ads">
          <Spin>
          <div className="col-2"></div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="\src\image\hotel.png" alt="Project-1" />
              </div>
              <div className="card-image-overly text-center mt-3">
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Express Js</span>
                <span className="card-detail-badge">Recat Js</span>
                <span className="card-detail-badge">Node Js</span>
              </div>
              <div className="card-body">
                <div className="ad-title text-center my-2">
                  <h5 className="text-uppercase">Hotel Booking Website</h5>
                </div>
                <a
                  href="https://github.com/shaadAli001/airbnb"
                  className="add-btn"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="\src\image\Expense.png" alt="Project-2" />
              </div>
              <div className="card-image-overly text-center mt-3">
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Express Js</span>
                <span className="card-detail-badge">Recat Js</span>
                <span className="card-detail-badge">Node Js</span>
              </div>
              <div className="card-body">
                <div className="ad-title text-center my-2">
                  <h5 className="text-uppercase">Expense Management Web-App</h5>
                </div>
                <a
                  href="https://github.com/shaadAli001/ExpenseTracker-MERN"
                  className="add-btn"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
