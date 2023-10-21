import { useRef } from "react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const WorkEditor = (props) => {
  const inputRefTitle = useRef();
  const inputRefImage = useRef();
  const inputRefDescription = useRef();
  const inputRefProjectLink = useRef();
  const inputRefCodeLink = useRef();
  const inputRefTag = useRef();

  function submitHandler(event) {
    event.preventDefault();
    // text content
    const inputTitle = inputRefTitle.current.value;
    const inputDescription = inputRefDescription.current.value;
    const inputProjectLink = inputRefProjectLink.current.value;
    const inputCodeLink = inputRefCodeLink.current.value;
    const inputTag = inputRefCodeLink.current.value;
    //image content
    const inputRawImage = inputRefImage.current.files[0];

    const imageRef = ref(storage, `work/${inputRawImage + v4()}`);
    uploadBytes(imageRef, inputRawImage).then(() =>
      console.log("Work content is uploaded")
    );

    const workData = {
      title: inputTitle,
      projectlink: inputProjectLink,
      description: inputDescription,
      codelink: inputCodeLink,
      tag: inputTag,
    };
    props.addWorkContent(workData);
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
