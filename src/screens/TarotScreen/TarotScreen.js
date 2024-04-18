import { useState } from "react";
import TarotCard from "../../components/TarotCard";
import "./index.css";
import Form from "react-bootstrap/Form";
import PredictModal from "../../components/PredictModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [conclusionText, setConclusionText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

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

    try {
      const response = await axios.post(
        "https://us-central1-stone-arcade-420004.cloudfunctions.net/read_tarot",
        { question: question }
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
        console.log(e)
        errorNotify("call api error");
    }

    // setSubmitQuestion(true);
  };

  return (
    <>
      {!isSubmitQuestion ? (
        <div className="main-container">
          <h1>โปรดกรอกคำถามเพื่อการทำนาย</h1>
          <div className="text-input">
            <Form.Label>คำถามที่ต้องการจะทำนาย</Form.Label>
            <Form.Control
              size="lg"
              placeholder="โปรดกรอกคำถาม"
              value={question}
              onChange={handleChangeQuestion}
            />
          </div>
          <Button onClick={hadleSubmitQuestion}>ยืนยัน</Button>
        </div>
      ) : (
        <div className="main-container">
          <h1>โปรดเลือกการ์ดของคุณเพื่อดูผลคำทำนาย</h1>
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
            <div className="conclusion"><p className="conclusion-text">{conclusionText}</p></div>
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
