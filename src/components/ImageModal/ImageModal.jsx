import "../component.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <button className="btn" onClick={props.onClick}>
        Cancel
      </button>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default Modal;
