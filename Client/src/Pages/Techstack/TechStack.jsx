import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStack";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  return (
    <>
      <div className="container techStack" id="techStack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>{" "}
          <hr />
          <p className="pb-3 text-center">
            👉 including Programing languages,Frameworks,Database,Front-end and
            Back-end,Api
          </p>
        </RubberBand>
        <div className="row">
          {TechstackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center align-self-center">
                        <tech.icon className="tech-icon" />
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
