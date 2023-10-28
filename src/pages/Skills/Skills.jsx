import "./Skills.css";
import { useState, useEffect } from "react";

const dummydata = [
  {
    id: "a1",
    title: "React Js",
    description: "Front-End Developer",
    companyName: "Google",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697947849/zxs86xsw7dizanwd3nqt.png",
    year: "2020",
  },
  {
    id: "a2",
    title: "Java Script",
    description: "Front-End programming",
    companyName: "Facebook",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697948729/nus6enwzdwvvizyls5lo.png",
    year: "2021",
  },
  {
    id: "a3",
    title: "Bootstrap",
    description: "Web Development",
    companyName: "Microsoft",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697948825/luf13bfyyjxnmnhgbuhy.png",
    year: "2010",
  },
  {
    id: "a4",
    title: "Scss",
    description: "Website Design and Development",
    companyName: "Google",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697948925/uaptxau0ifefqql6fbbv.png",
    year: "2020",
  },
];

const Skills = () => {
  const [skillsdata, setskillsdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/demo/skills", {
        method: "GET",
      });
      const data = await response.json();

      console.log(data);
      setskillsdata(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setskillsdata(dummydata);
      setloading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="skill">
      <h2 className="head-text center">Skills & Expriences</h2>
      <div className="skills">
        <div className="skills-container">
          <div className="skills-list">
            {skillsdata.map((skill) => (
              <div className="skills-item" key={skill._id || skill.id}>
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
