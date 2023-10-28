import { images } from "../../constains";
import { motion } from "framer-motion";
import "./home.css";
const Home = () => {
  return (
    <div id="head" className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="header__info "
      >
        <div className="header__info-container1">
          <div className="header__info-badge">
            <span>✋</span>
          </div>
          <div className="header__info-text ">
            <p>Hello I'm</p>
            <h2>Prabesh</h2>
          </div>
        </div>
        <div className="header__info-container2 center">
          <p>Web designer & freelancer</p>
        </div>
      </motion.div>
      <div className="header__image">
        <div className="header__image-profile center">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="header__image-profile-front"
          >
            <img src={images.profile} alt="img_profile" />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="header__image-profile-background"
          >
            <img src={images.circle} alt="img_circle" />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header__image-essential"
        >
          <div className="header__image-essential-java">
            <img src={images.js} alt="header__image-essentials-java" />
          </div>
          <div className="header__image-essential-bootstrap">
            <img
              src={images.bootstrap}
              alt="header__image-essentials-bootstrap"
            />
          </div>
          <div className="header__image-essential-react">
            <img src={images.react} alt="header__image-essentials-react" />
          </div>
          <div className="header__image-essential-sass">
            <img src={images.sass} alt="header__image-essentials-sass" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
