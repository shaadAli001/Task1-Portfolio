import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021-(Present)"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              BTech-Mechanical Engineering
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              APJ Abdul Kalam Technological University,&nbsp;Kerala
            </h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019-2021"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h5 className="vertical-timeline-element-subtitle">IHRD Kerala</h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
