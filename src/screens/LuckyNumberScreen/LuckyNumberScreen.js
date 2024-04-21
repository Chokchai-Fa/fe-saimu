import "./index.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import { BE_HOST } from "../../App";
import { errorNotify } from "../../components/Toast";
import background from "../../assets/background-number.jpg"


const LuckyNumberScreen = () => {

  const [text, setText] = useState('... กำลังโหลด กรุณารอสักครู่');

  const getLuckyNumberAPi = async () => {
    const authorization = "Bearer " + localStorage.getItem("token");

    try {
      const response = await axios.get(`${BE_HOST}/vertexai/get_lotto`, {
        headers: { Authorization: authorization },
      });
      if (response.status == 200) {
        setText(response.data.conclusion)
      }
    } catch (e) {
        errorNotify("error to fetch data, please try again");
    }
  };

  useEffect(() => {
    getLuckyNumberAPi();
  }, []);

  return (
    <div className="home-container"
    style={{
      backgroundImage: `url(${background})`,
    }}
    >
      <h1 className="number-header">เลขมงคล</h1>
      <div className="home-box-container">
        <p className="lucky-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LuckyNumberScreen;
