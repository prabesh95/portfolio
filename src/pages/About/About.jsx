import { useState, useEffect } from "react";
import { Cardlist } from "../../components";

import classes from "./About.module.css";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";

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
    <div>
      <h1 className="center">
        My Creative <span className={classes.span}>Portfolio </span> Section
      </h1>
      <Cardlist lists={aboutdata} />
    </div>
  );
};

export default About;
