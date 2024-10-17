import React from "react";
import "./Award.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaJava } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";


const Award = () => {
  return (
    <>
      <div className="award" id="award">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Achivements
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jun-2022 to Dec-2022"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<FaJava />}
          >
            <h3 className="vertical-timeline-element-title">
             DSA certificate from PW
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Nov-2023 to Mar-2024"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<FaJsSquare />}
          >
            <h3 className="vertical-timeline-element-title">MERN stack certificate from Apna College</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Award;
