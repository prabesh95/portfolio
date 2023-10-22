import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SkillsEditor = () => {
  const navigate = useNavigate();
  const inputRefTitle = useRef();
  const inputRefImage = useRef();
  const inputRefDescription = useRef();
  const inputRefCompanyName = useRef();
  const inputRefYear = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const inputTitle = inputRefTitle.current.value;
    const inputDescription = inputRefDescription.current.value;
    const inputImage = inputRefImage.current.files[0];
    const inputCompanyName = inputRefCompanyName.current.value;
    const inputYear = inputRefYear.current.value;

    const formData = new FormData();
    formData.append("title", inputTitle);
    formData.append("image", inputImage);
    formData.append("description", inputDescription);
    formData.append("companyName", inputCompanyName);
    formData.append("year", inputYear);

    console.log(formData);

    axios
      .post("http://localhost:8080/demo/skills", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="editorfile" onSubmit={submitHandler}>
      <h1>Skills Page Handeling</h1>

      <div className="input-box">
        <input
          className="text-box"
          type="text"
          required
          placeholder="Skill Title"
          ref={inputRefTitle}
        />
      </div>

      <div className="input-box">
        <label htmlFor="image">Upload Image </label>
        <input type="file" ref={inputRefImage} required />
      </div>

      <div className="input-box">
        <input
          className="text-box"
          type="text"
          required
          placeholder="Company Name"
          ref={inputRefCompanyName}
        />
      </div>
      <div className="input-box">
        <input
          className="text-box"
          type="text"
          required
          placeholder="Year"
          ref={inputRefYear}
        />
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

      <div className="input-box right">
        <button> conform</button>
      </div>
    </form>
  );
};

export default SkillsEditor;
