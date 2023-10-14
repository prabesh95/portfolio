import { Modal } from "../../components";
import { Backdrop } from "../../components";
import { useState } from "react";
const CardComponent = (props) => {
  const [imageState, setimageState] = useState(false);

  return (
    <div className="card">
      <div
        className="card__image"
        onClick={() => {
          setimageState(true);
        }}
      >
        <img className="box-size" src={props.image} alt={props.title} />
      </div>
      <div className="card__title center">{props.title}</div>
      <div className="card__descreption">{props.description}</div>
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
