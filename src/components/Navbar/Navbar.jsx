import { Link } from "react-router-dom";
import { images } from "../../constains";
import "./Navbar.css";

const Navbar = () => {
  const navlist = ["home", "about", "skills", "testimonials", "contacts"];
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
      <div className="nav__admin">
        <div className="empty"></div>
        <Link to={`/editor`}>Editor</Link>
      </div>
    </div>
  );
};

export default Navbar;
