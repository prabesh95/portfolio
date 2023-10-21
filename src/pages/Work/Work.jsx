import { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { Cardlist } from "../../components";

const Work = (props) => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [workdata, setworkdata] = useState([]);
  const [imageList, setimageList] = useState([]);
  const imageRefList = ref(storage, "work/");
  const [filterWork, setfilterWork] = useState([]);
  const [loadingState, setloadingState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // Fetch image URLs
      const response = await listAll(imageRefList);
      const imageUrlPromises = response.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      });

      const imageList = await Promise.all(imageUrlPromises);

      setimageList(imageList);

      // Fetch work data
      const workDataResponse = await fetch(
        "https://newportfolio-3729a-default-rtdb.firebaseio.com//work.json"
      );
      const datas = await workDataResponse.json();

      const workdatas = [];
      for (const key in datas) {
        const data = {
          id: key,
          ...datas[key],
        };
        workdatas.push(data);
      }

      // adding images to workdatas
      for (let i = 0; i < workdatas.length; i++) {
        workdatas[i].image = imageList[i];
      }

      setworkdata(workdatas);
      setfilterWork(workdatas);
      console.log(workdata);
      console.log(filterWork);
    };

    fetchData();
  }, []);

  const handleWorkFilter = (item) => {};
  return (
    <div>
      <h2 className="head-text center">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="work-filter center">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${activeFilter === item ? "item-active" : ""}`}
            ></div>
          )
        )}
      </div>
      <div className="work-portfolio"></div>
    </div>
  );
};

export default Work;
