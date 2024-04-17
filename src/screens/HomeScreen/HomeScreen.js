import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ModeSelector from "../../components/ModeSelector";
import luckyNumber from "../../assets/luckynumber.png";
import tshirt from "../../assets/tshirt.png";
import tarrotcard from "../../assets/tarrotcard.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <ModeSelector
            onClick={ ()=>{navigate("/luckynumber")}}
            image={luckyNumber}
            text={"เลขมงคล"}
          />
        </Col>
        <Col>
          <ModeSelector
            onClick={() => {navigate("/luckyshirt")}}
            image={tshirt}
            text={"สีเสื้อประจำวันเกิด"}
          />
        </Col>
        <Col>
          <ModeSelector
            onClick={()=>{navigate("/tarot")}}
            image={tarrotcard}
            text={"ทำนายดวงชะตาจากไพ่ทาโร่"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
