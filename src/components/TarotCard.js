import tarot from "../assets/tarrot.png";
import logo from "../assets/logo.png";
import Image from "react-bootstrap/Image";
import "./index.css";

const TarotCard = ({ onClick }) => {
  return (
    <>
      <Image className="card" src={tarot} onClick={onClick} />
    </>
  );
};

export default TarotCard;
