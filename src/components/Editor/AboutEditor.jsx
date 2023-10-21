import "./EditorFile.css";
import { useRef } from "react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AboutEditor = (props) => {
  const inputRefTitle = useRef();
  const inputRefImage = useRef();
  const inputRefDescription = useRef();

  function submitHandler(event) {
    event.preventDefault();
    // text content
    const inputTitle = inputRefTitle.current.value;
    const inputDescription = inputRefDescription.current.value;
    //image content
    const inputRawImage = inputRefImage.current.files[0];

    const imageRef = ref(storage, `abouts/${inputRawImage + v4()}`);
    uploadBytes(imageRef, inputRawImage).then(() =>
      console.log("About content is uploaded")
    );

    const aboutData = {
      title: inputTitle,

      description: inputDescription,
    };
    props.addAboutContent(aboutData);
  }

  return (
    <form className="editorfile" onSubmit={submitHandler}>
      <h1>About Page Handeling</h1>

      <div className="input-box">
        <input
          className="text-box"
          type="text"
          required
          placeholder="Portfolio Title"
          ref={inputRefTitle}
        />
      </div>

      <div className="input-box">
        <label htmlFor="image">Upload Image </label>
        <input type="file" required ref={inputRefImage} />
      </div>

      <div className="input-box">
        <textarea
          type="text"
          required
          placeholder="details of your experience"
          rows="5"
          ref={inputRefDescription}
        />
      </div>

      <div className="input-box right">
        <button> conform</button>
      </div>
    </form>
  );
};

export default AboutEditor;
