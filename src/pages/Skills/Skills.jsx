import "./Skills.css";
import { useState, useEffect } from "react";

const Skills = () => {
  const [skillsdata, setskillsdata] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo/skills", {
      method: "GET",
    });
    const data = await response.json();

    console.log(data);
    setskillsdata(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2 className="head-text center">Skills & Expriences</h2>
      <div className="skills">
        <div className="skills-container">
          <div className="skills-list">
            {skillsdata.map((skill) => (
              <div className="skills-item" key={skill._id}>
                <div className="skills-image">
                  <img src={skill.image} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
          <div className="skills-exp">
            {skillsdata.map((work) => (
              <div className="skills-exp-item" key={work.title}>
                <div className="skills-exp-year">
                  <p>{work.year}</p>
                </div>
                <div className="skills-exp-works">
                  <h4>{work.title}</h4>
                  <p>{work.companyName}</p>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
