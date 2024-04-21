import { useState } from "react";
import TarotCard from "../../components/TarotCard";
import "./index.css";
import Form from "react-bootstrap/Form";
import PredictModal from "../../components/PredictModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BE_HOST } from "../../App";
import background from "../../assets/tarot-background.jpg";

const TarotScreen = () => {
  const [modalShow, setModalShow] = useState(false);
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [card, setCard] = useState("");
  const [image, setImage] = useState("");
  const [question, setQuestion] = useState("");
  const [pastText, setPastText] = useState("");
  const [pastcard, setPastCard] = useState("");
  const [pastImage, setPastImage] = useState("");
  const [presentText, setPresentText] = useState("");
  const [presentcard, setPresentCard] = useState("");
  const [presentImage, setPresentImage] = useState("");
  const [futureText, setFutureText] = useState("");
  const [futurecard, setFutureCard] = useState("");
  const [futureImage, setFutureImage] = useState("");
  const [recommendText, setRecommendText] = useState("");
  const [recommendcard, setRecommendCard] = useState("");
  const [recommendImage, setRecommendImage] = useState("");
  const [conclusionText, setConclusionText] = useState("");

  const [isSubmitQuestion, setSubmitQuestion] = useState(false);
  const [openPast, setOpenPast] = useState(false);
  const [openPresent, setOpenPresent] = useState(false);
  const [openFuture, setOpenFuture] = useState(false);
  const [openRecommend, setOpenRecommend] = useState(false);

  const handlePast = () => {
    setHeader("อดีต");
    setBody(pastText);
    setCard(pastcard);
    setOpenPast(true);
    setImage(pastImage);
  };

  const handlePresent = () => {
    setHeader("ปัจจุบัน");
    setBody(presentText);
    setCard(presentcard);
    setOpenPresent(true);
    setImage(presentImage);
  };

  const handleFuture = () => {
    setHeader("อนาคต");
    setBody(futureText);
    setCard(futurecard);
    setOpenFuture(true);
    setImage(futureImage);
  };

  const handleSuggestion = () => {
    setHeader("คำแนะนำ");
    setBody(recommendText);
    setCard(recommendcard);
    setOpenRecommend(true);
    setImage(recommendImage);
  };

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const errorNotify = (errorText) =>
    toast.error(errorText, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const hadleSubmitQuestion = async () => {
    // call api for retrive data
    const authorization = "Bearer " + localStorage.getItem("token");

    try {
      const response = await axios.get(
        `${BE_HOST}/vertexai/read_tarot/${question}`,
        {
          headers: { Authorization: authorization },
        }
      );
      if (response.status == 200) {
        setPastText(response.data.past.result);
        setPastCard(response.data.past.card_name);
        setPastImage(response.data.past.image_url);
        setPresentText(response.data.present.result);
        setPresentCard(response.data.present.card_name);
        setPresentImage(response.data.present.image_url);
        setFutureText(response.data.future.result);
        setFutureCard(response.data.future.card_name);
        setFutureImage(response.data.future.image_url);
        setRecommendText(response.data.advice.result);
        setRecommendCard(response.data.advice.card_name);
        setRecommendImage(response.data.advice.image_url);
        setConclusionText(response.data.conclusion);
        setSubmitQuestion(true);
      }

      setSubmitQuestion(true);
    } catch (e) {
      console.log(e);
      errorNotify("call api error");
    }

    // setSubmitQuestion(true);
  };

  return (
    <>
      {!isSubmitQuestion ? (
        <div
          className="main-container"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h1 className="tarot-text">โปรดกรอกคำถามเพื่อการทำนาย</h1>
          <div className="text-input">
            <Form.Label className="tarot-text">
              คำถามที่ต้องการจะทำนาย
            </Form.Label>
            <Form.Control
              size="lg"
              placeholder="โปรดกรอกคำถาม"
              value={question}
              onChange={handleChangeQuestion}
            />
          </div>
          <Button onClick={hadleSubmitQuestion}>ยืนยัน</Button>

          <div className="conclusion">
            <p className="suggestion-text"><span style={{fontWeight: "bold"}}>คำแนะนำสำหรับ ดูดวงไพ่ทาโร่ต์</span> 
            <br/><br />1. การดูดวงด้วยไพ่ทาโร่ต์ 4 ใบ
              นี้จะใช้ไพ่วางในตำแหน่งต่างๆ ได้แก่ อดีต ปัจจุบัน อนาคต และคำแนะนำ
              ท่านสามารถอ่านคำทำนายหรือตีความจากรูปหน้าไพ่ได้
              โดยการตีความเป็นไปได้หลากหลาย
              คำทำนายของทางเว็บเป็นเพียงแนวทางหนึ่งเท่านั้น ไม่ได้ถูกต้อง 100%
            <br/>2. การดูดวงด้วยไพ่ทาโร่ต์นี้ จะใช้ 'จิต' ของท่านในการทำนาย
              เพราะเชื่อว่าจิต มีพลังเหนือร่างกาย และเป็นตัวกำหนดวิถีความเป็นไป
              ดังนั้นในการพยากรณ์ด้วยไพ่ทาโรต์ ท่านต้องมีสมาธิและศรัทธา
              รวมสมาธิไว้ที่ไพ่ (สำคัญมาก) ไพ่เป็นเพียงสื่อกลาง
              รูปและสัญลักษณ์บนไพ่ที่หยิบได้
              สื่อสารบอกเล่าเรื่องราวต่างๆที่อาจจะเกิดขึ้น 
            <br/>3. หากท่านไม่มีสมาธิ
              หรือไม่สะดวกเรื่องเวลา กำลังเร่งรีบ หรือติดภารกิจอื่นๆอยู่
              แนะนำให้เลือกไพ่ในภายหลัง 
            <br/>4. คำทำนายเป็นเพียงแนวทาง หากไพ่ไม่ดี
              ขออย่าพึ่งเสียกำลังใจ ขอให้ใช้สติ และปัญญา
              ในการรับมือกับปัญหาที่จะเกิดขึ้น 
            <br/>5. หากคำทำนายนี้ล่วงเกินท่าน
              ทำให้ไม่สบายใจ หรือทำให้เกิดความไม่พอใจใดๆก็ตาม
              ขอท่านให้อภัยทางผู้จัดทำด้วย
            </p>
          </div>
        </div>
      ) : (
        <div
          className="main2-container"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h1 className="tarot-text">โปรดเลือกการ์ดของคุณเพื่อดูผลคำทำนาย</h1>
          <div className="card-container">
            <TarotCard
              onClick={() => {
                handlePast();
                setModalShow(true);
              }}
            />
            <TarotCard
              onClick={() => {
                handlePresent();
                setModalShow(true);
              }}
            />
            <TarotCard
              onClick={() => {
                handleFuture();
                setModalShow(true);
              }}
            />
            <TarotCard
              onClick={() => {
                handleSuggestion();
                setModalShow(true);
              }}
            />
          </div>
          <PredictModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            header={header}
            card={card}
            body={body}
            image={image}
          />
          {openPast && openPresent && openFuture && openRecommend ? (
            <div className="conclusion">
              <p className="conclusion-text">{conclusionText}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default TarotScreen;
