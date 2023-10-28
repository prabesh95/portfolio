import { useState, useEffect } from "react";
import { Cardlist } from "../../components";
import { images } from "../../constains";

import classes from "./About.css";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const dummydata = [
  {
    id: "d1",
    title: "JavaScript Games",
    image: images.games,
    description:
      "I possess strong JavaScript skills, enabling me to develop interactive and dynamic web applications. I can create engaging user experiences, validate data, and enhance website functionality using this versatile programming language.",
  },
  {
    id: "d2",
    title: "UI/UX",
    image: images.ui_ux,
    description:
      "I specialize in UI/UX design, with a focus on crafting user-friendly interfaces that prioritize user experience. I excel at creating intuitive layouts, conducting user research, and implementing design principles to enhance digital products.",
  },
  {
    id: "d3",
    title: "Web Animation",
    image: images.web_animation,
    description:
      "I have expertise in web animation, bringing websites to life through captivating and seamless animations. I can create visually appealing transitions, interactive elements, and engaging storytelling through animation to enhance the overall user experience.",
  },
  {
    id: "d4",
    title: "Web Development",
    image: images.web_development,
    description:
      "I'm proficient in web development, with a strong command of front-end and back-end technologies. I have experience in building responsive and interactive websites and web applications, ensuring a seamless and engaging online presence for users.",
  },
  {
    id: "d5",
    title: "Web Design",
    image: images.web_design,
    description:
      "I'm a skilled web designer with a keen eye for aesthetics and usability. I specialize in creating visually appealing and user-centric website layouts, combining creativity and design principles to deliver engaging digital experiences.",
  },
];

const About = () => {
  const [loading, setloading] = useState(true);
  const [aboutdata, setaboutdata] = useState([]);
  const [imageList, setimageList] = useState([]);
  const imageRefList = ref(storage, "abouts/");

  useEffect(() => {
    listAll(imageRefList).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageList((prev) => [...prev, url]);
        });
      });
    });

    fetch("https://newportfolio-3729a-default-rtdb.firebaseio.com//about.json")
      .then((aboutData) => {
        return aboutData.json();
      })
      .then((datas) => {
        const aboutdatas = [];
        for (const key in datas) {
          const data = {
            id: key,
            ...datas[key],
          };
          aboutdatas.push(data);
        }
        for (let i = 0; i < aboutdatas.length; i++) {
          aboutdatas[i].image = imageList[i];
        }

        setaboutdata(aboutdatas);

        setloading(false);
      });
  }, [aboutdata]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="about">
      <h1 className="center">
        My Creative <span className={classes.span}>Portfolio </span> Section
      </h1>
      <Cardlist lists={dummydata} />
    </div>
  );
};

export default About;
