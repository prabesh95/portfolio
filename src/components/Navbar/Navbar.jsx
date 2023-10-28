import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constains";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navlist = ["home", "about", "work", "skills", "contacts"];
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="nav__link center">
        {navlist.map((list) => (
          <div className={`nav__list-${list}`} key={list}>
            <div className="empty"></div>
            <Link to={`/${list}`} className="link">
              {list}
            </Link>
          </div>
        ))}
      </div>

      <div className="app__nav__menu">
        <TiThMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.83, ease: "easeOut" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            {navlist.map((list) => (
              <li key={list}>
                <Link
                  to={`/${list}`}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {list}
                </Link>
              </li>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
