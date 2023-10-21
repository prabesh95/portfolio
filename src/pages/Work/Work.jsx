import { useState, useEffect } from "react";
import { Cardlist } from "../../components";
import "./Work.css";

const Work = (props) => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [workdata, setworkdata] = useState([]);
  const [filterdata, setfilterdata] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo/work", {
      method: "GET",
    });
    const data = await response.json();
    setworkdata(data);
    setfilterdata(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    if (item === "All") {
      setfilterdata(workdata);
    } else {
      setfilterdata(workdata.filter((data) => data.tag === item));
    }
  };
  return (
    <div>
      <h2 className="head-text center">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="work-filter center">
        {["UI/UX", "Web App", "Java games", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`work-filter__item ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <div className="work-portfolio">
        <Cardlist lists={filterdata} />
      </div>
    </div>
  );
};

export default Work;
