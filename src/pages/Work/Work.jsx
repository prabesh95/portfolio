import { useState, useEffect } from "react";
import { Cardlist } from "../../components";
import "./Work.css";

const dummydata = [
  {
    id: "d1",
    title: "Modern UI/UX Website",
    description: "A modern UI/UX Portfolio Website",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697862000/gslrl59cib0rz26wun1i.png",
    tag: "UI/UX",
  },
  {
    id: "d2",
    title: "E-Commerce Project",
    description: "Modern UI/UX",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697880248/tzuvykg3uvxdxptbdz95.png",
    tag: "UI/UX",
  },
  {
    id: "d3",
    title: "Sword Guy",
    description: "Adventure game",
    image:
      "http://res.cloudinary.com/dg9vehcjo/image/upload/v1697880587/a0oxypofqsh7opxkdtrv.png",
    tag: "Java games",
  },
];

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [workdata, setworkdata] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/demo/work", {
        method: "GET",
      });
      const data = await response.json();
      setworkdata(data);
      setfilterdata(data);
      //console.log(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setworkdata(dummydata);
      setfilterdata(dummydata);
      setloading(false);
    }
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
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="work">
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
