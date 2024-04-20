import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ModeSelector from "../../components/ModeSelector";
import luckyNumber from "../../assets/luckynumber.png";
import tshirt from "../../assets/tshirt.png";
import tarrotcard from "../../assets/tarrotcard.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { validateLogin } from "../../service/authen";
import "./index.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = validateLogin();
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  const logOut = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("token", "");
    setTimeout(()=>{
      navigate("/login");
    }, 1000)
  };

  return (
    <>
      <div className="logout-button">
        <Button variant="danger" type="submit" onClick={logOut}>
          Logout
        </Button>
      </div>

      <Container>
        <Row>
          <Col>
            <ModeSelector
              onClick={() => {
                navigate("/luckynumber");
              }}
              image={luckyNumber}
              text={"เลขมงคล"}
            />
          </Col>
          <Col>
            <ModeSelector
              onClick={() => {
                navigate("/luckyshirt");
              }}
              image={tshirt}
              text={"สีเสื้อประจำวันเกิด"}
            />
          </Col>
          <Col>
            <ModeSelector
              onClick={() => {
                navigate("/tarot");
              }}
              image={tarrotcard}
              text={"ทำนายดวงชะตาจากไพ่ทาโร่"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
