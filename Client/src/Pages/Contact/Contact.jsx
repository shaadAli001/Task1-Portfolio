import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("please Provide all Feilds");
      }
      const res = await axios.post(
        "http://localhost:8080/api/v1/potfolio/sendEmail",
        { name, email, msg }
      );

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container contact" id="contact">
        <div className="card border-0">
          <div className="row m-auto">
            <div className="col-md-6 col-lg-6 col-xl-6 col-xs-12">
              <div>
                <div className="row m-auto border-line">
                  <LightSpeed>
                    <img
                      className="img p-5"
                      src="\src\image\contact.jpg"
                      alt="contact"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="row ol-md-6 col-lg-6">
              <Rotate>
                <div className=" d-flex card1 border-0 px-4 py-5">
                  <div className="row">
                    <h6>
                      Contact Me at
                      <FaLinkedin color="#0a66c2" className="mx-5" size={25} />
                      <FaGithub className="mx-4" size={25} />
                      <FaWhatsapp color="green" className="mx-4" size={25} />
                      <FaXTwitter className="mx-4" size={25} />
                    </h6>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center m-auto">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Enter Your Message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="btn" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
