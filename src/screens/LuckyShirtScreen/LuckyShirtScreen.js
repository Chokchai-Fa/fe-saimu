import "./index.css";
import { useState, useEffect } from "react";
import { BE_HOST } from "../../App";
import { errorNotify } from "../../components/Toast";
import axios from "axios";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import background from "../../assets/background-shirt.jpg";

const LuckyShirtScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [text, setText] = useState("");
  const [isSubmit, setSubmit] = useState(false);

  const items = [
    "วันจันทร์",
    "วันอังคาร",
    "วันพุธ",
    "วันพฤหัสบดี",
    "วันศุกร์",
    "วันเสาร์",
    "วันอาทิตย์",
  ];
  const dayMap = {
    วันจันทร์: "Monday",
    วันอังคาร: "Tuesday",
    วันพุธ: "Wednesday",
    วันพฤหัสบดี: "Thursday",
    วันศุกร์: "Friday",
    วันเสาร์: "Saturday",
    วันอาทิตย์: "Sunday",
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSubmit = async () => {
    const authorization = "Bearer " + localStorage.getItem("token");

    try {
      const response = await axios.get(
        `${BE_HOST}/vertexai/get_lucky_color/${dayMap[selectedItem]}`,
        {
          headers: { Authorization: authorization },
        }
      );
      if (response.status == 200) {
        setText(response.data.conclusion);
        setSubmit(true);
      }
    } catch (e) {
      errorNotify("error to fetch data, please try again");
    }
  };

  return (
    <div
      className="home-shirt-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className="shirt-header">สีเสื้อประจำวันเกิด</h1>

      <div className="selector-header">
        <DropdownButton
          variant="secondary"
          title={selectedItem || "Select Item"}
        >
          {items.map((item, index) => (
            <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {isSubmit? (
        <div className="home-box-shirt-container">
          <p className="lucky-text">{text}</p>{" "}
        </div>
      ) : (
        <></>
      )}

      <div className="shirt-suggestion">
        <p className="shirt-suggesstion-text">
          สีมงคลประจำวันเกิดปี 2567 นี้สามารถนำไปแมตช์กับสีกระเป๋า สีเสื้อผ้า
          สีเครื่องประดับ หรือสีของสิ่งของต่างๆ ได้
        </p>
      </div>
    </div>
  );
};

export default LuckyShirtScreen;
