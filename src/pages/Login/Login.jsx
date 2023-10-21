import { useEffect, useRef, useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const inputRefName = useRef();
  const inputRefPassword = useRef();
  const inputRefImage = useRef();
  const [form, setform] = useState({});
  const [users, setusers] = useState([]);

  //const formHandler = (e) => {
  //  console.log(e.target.value, e.target.id);
  //console.log(inputName.current, inputName.current.id);
  //console.log(inputPassword, inputPassword.current.id);

  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputName = inputRefName.current.value;
    const inputPassword = inputRefPassword.current.value;
    const inputImage = inputRefImage.current.files[0];

    const formData = new FormData();
    formData.append("image", inputImage);
    formData.append("name", inputName);
    formData.append("password", inputPassword);

    console.log(formData);

    axios
      .post("http://localhost:8080/demo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  /*  const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };*/

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    setusers(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="login" onSubmit={handleSubmit}>
      <form className="login__form">
        <input
          type="text"
          placeholder="Name"
          required
          // onChange={formHandler}
          ref={inputRefName}
          name="name"
        />
        <input
          type="text"
          placeholder="Password"
          required
          //  onChange={formHandler}
          ref={inputRefPassword}
          id="password"
          name="password"
        />

        <label htmlFor="image">Upload Image </label>
        <input
          type="file"
          accept="image/*"
          ref={inputRefImage}
          required
          name="image"
        />

        <button>Log In</button>
      </form>
      <div>
        {users.map((user) => (
          <li key={user._id}>
            {user.username},{user.password}
            <img src={user.image} alt={user.username} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Login;
