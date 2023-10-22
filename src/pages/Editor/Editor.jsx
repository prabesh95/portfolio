import { AboutEditor, WorkEditor, SkillsEditor } from "../../components";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const navigate = useNavigate();
  function addAboutHandler(aboutData) {
    fetch(
      "https://newportfolio-3729a-default-rtdb.firebaseio.com//about.json",
      {
        method: "POST",
        body: JSON.stringify(aboutData),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    ).then(() => navigate("/", { replace: true }));
  }
  function addWorkHandeler(workData) {
    fetch("https://newportfolio-3729a-default-rtdb.firebaseio.com//work.json", {
      method: "POST",
      body: JSON.stringify(workData),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(() => navigate("/", { replace: true }));
  }

  return (
    <div className="editor">
      <AboutEditor addAboutContent={addAboutHandler} />
      <WorkEditor />
      <SkillsEditor />
    </div>
  );
};

export default Editor;
