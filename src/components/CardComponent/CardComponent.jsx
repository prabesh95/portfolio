import { Modal } from "../../components";
import { Backdrop } from "../../components";
import { useState } from "react";
//import { motion } from "framer-motion";
const CardComponent = (props) => {
  const [imageState, setimageState] = useState(false);

  return (
    <div className={`${!imageState === true ? "card" : ""}`}>
      <div
        className="card__image"
        onClick={() => {
          setimageState(true);
        }}
      >
        <img className="box-size" src={props.image} alt={props.title} />
      </div>
      <div className="card__title center">{props.title}</div>
      <div className="card__descreption">
        {props.description}
        {props.title === "Sword Guy" ? (
          <a
            href="https://ornate-malasada-1a26c7.netlify.app/"
            style={{ marginLeft: 50, textDecoration: "none", color: "red" }}
            target="_blank"
          >
            Play
          </a>
        ) : (
          ""
        )}
      </div>

      {imageState && (
        <Backdrop
          onClick={() => {
            setimageState(false);
          }}
        />
      )}
      {imageState && (
        <Modal
          image={props.image}
          title={props.title}
          onClick={() => {
            setimageState(false);
          }}
        />
      )}
    </div>
  );
};

export default CardComponent;
