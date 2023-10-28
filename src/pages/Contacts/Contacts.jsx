import React, { useState, useRef } from "react";
import "./Contacts.css";
import { images } from "../../constains";
import axios from "axios";

const Contacts = () => {
  const [formData, setformData] = useState({});
  const [formSubmitted, setformSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const inputRefName = useRef();
  const inputRefEmail = useRef();
  const inputRefMessage = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    const inputName = inputRefName.current.value;
    const inputEmail = inputRefEmail.current.value;
    const inputMessage = inputRefMessage.current.value;

    setformData({
      name: inputName,
      email: inputEmail,
      message: inputMessage,
    });
    axios
      .post("http://localhost:8080/demo/client", formData)
      .then((res) => {
        console.log(res);
        //navigate("/", { replace: true });
        // const data = res.json();
        // console.log(data);
        // console.log(formSubmitted);
        setformSubmitted(true);
        console.log(formSubmitted);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contacts">
      <h2>Meet And Chat With Me </h2>
      <div className="contacts__cards">
        <div className="contacts__card">
          <img src={images.email} alt="email" />
          <a href="mailto:peter.prabeshdahal1995@gmail.com">
            Hello@prabesh.com
          </a>
        </div>
        <div className="contacts__card">
          <img src={images.phone} alt="phone" />
          <a href="tel: +91 (123) 456-7890 ">+91 (123) 456-7890</a>
        </div>
      </div>
      {!formSubmitted ? (
        <form className="contacts__form" onSubmit={submitHandler}>
          <div className="name">
            <input
              type="text"
              placeholder="Your Name"
              required
              name="name"
              ref={inputRefName}
            />
          </div>
          <div className="email">
            <input
              required
              type="email"
              placeholder="Your email"
              name="email"
              ref={inputRefEmail}
            />
          </div>
          <div className="textarea">
            <textarea
              required
              name="message"
              placeholder="Your Message"
              ref={inputRefMessage}
            />
          </div>
          <div className="button">
            <button>{loading ? "Sending..." : "Send Message"}</button>
          </div>
        </form>
      ) : (
        <div>
          <h3> Thank You for Getting in Touch</h3>
        </div>
      )}
    </div>
  );
};

export default Contacts;
