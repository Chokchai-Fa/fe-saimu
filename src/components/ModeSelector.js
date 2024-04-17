import tarot from "../assets/tarrot.png";
import logo from "../assets/logo.png";
import Image from "react-bootstrap/Image";
import "./index.css";

const ModeSelector = ({ onClick, image, text }) => {
  return (
    <div className="mode-container">
      <Image className="mode-selector" src={image} onClick={onClick} />
      <h2>{text}</h2>
    </div>
  );
};

export default ModeSelector;
