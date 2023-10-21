import { useRef } from "react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

const WorkEditor = (props) => {
  const inputRefTitle = useRef();
  const inputRefImage = useRef();
  const inputRefDescription = useRef();
  const inputRefProjectLink = useRef();
  const inputRefCodeLink = useRef();
  const inputRefTag = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const inputTitle = inputRefTitle.current.value;
    const inputDescription = inputRefDescription.current.value;
    const inputImage = inputRefImage.current.files[0];
    const inputProjectLink = inputRefProjectLink.current.value;
    const inputCodeLink = inputRefCodeLink.current.value;
    const inputTag = inputRefTag.current.value;

    const formData = new FormData();
    formData.append("title", inputTitle);
    formData.append("image", inputImage);
    formData.append("description", inputDescription);
    formData.append("projectlink", inputProjectLink);
    formData.append("codelink", inputCodeLink);
    formData.append("tag", inputTag);

    console.log(formData);

    axios
      .post("http://localhost:8080/demo/work", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <form className="editorfile" onSubmit={submitHandler}>
      <h1>Work Page Handeling</h1>

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
        <input type="file" ref={inputRefImage} required />
      </div>

      <div className="input-box">
        <textarea
          type="text"
          required
          placeholder="Short Descreption"
          rows="5"
          ref={inputRefDescription}
        />
      </div>
      <div className="input-box">
        <input
          className="text-box"
          type="url"
          placeholder="Project link"
          ref={inputRefProjectLink}
        />
      </div>
      <div className="input-box">
        <input
          className="text-box"
          type="url"
          placeholder="Code link (https//:github.com/<something>)"
          ref={inputRefCodeLink}
        />
      </div>
      <div className="input-box">
        <input
          className="text-box"
          type="text"
          required
          placeholder="Tag"
          ref={inputRefTag}
        />
      </div>

      <div className="input-box right">
        <button> conform</button>
      </div>
    </form>
  );
};

export default WorkEditor;
