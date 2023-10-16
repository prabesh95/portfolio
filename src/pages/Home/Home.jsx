import { images } from "../../constains";
import "./home.css";
const Home = () => {
  return (
    <div className="header">
      <div className="header__info ">
        <div className="header__info-container1">
          <div className="header__info-badge">
            <span>✋</span>
          </div>
          <div className="header__info-text ">
            <p>Hi I'm</p>
            <h2>Prabesh</h2>
          </div>
        </div>
        <div className="header__info-container2">
          <p>Web designer & freelancer</p>
        </div>
      </div>
      <div className="header__image">
        <div className="header__image-profile center">
          <div className="header__image-profile-front">
            <img src={images.profile} alt="img_profile" />
          </div>
          <div className="header__image-profile-background">
            <img src={images.circle} alt="img_circle" />
          </div>
        </div>
        <div className="header__image-essentials">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
