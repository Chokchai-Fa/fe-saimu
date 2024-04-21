import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import "./index.css";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BE_HOST } from "../../App";
import axios from "axios";
import { validateLogin } from "../../service/authen";

import { ToastContainer } from "react-toastify";
import { errorNotify, successNotify } from "../../components/Toast";

const LoginScreen = () => {

  useEffect(()=>{
    const isLogin = validateLogin();
    if (isLogin) {
      navigate("/home");
    }
  },[])


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // validation input form
    if ((email == "") || (password == "")) {
      if (email == "") {
        errorNotify("email cannot empty");
      }

      if (password == "") {
        errorNotify("password cannot empty");
      }
    }else{
      try{
        const response = await axios.post(`${BE_HOST}/login`, {
          username: email,
          password: password,
        }, {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }});
        if (response.status == 200) {
          localStorage.setItem("login", true);
          localStorage.setItem("token", response.data.token.access_token);
          successNotify("login successfully");
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      }catch(e){
        errorNotify("login failed, please try again");
      }
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="inner-container">
          <div className="header">
            <Image className="logo" src={logo} />
            <h1>SaiMU</h1>
          </div>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me for Good Fortune" />
              </Form.Group>
              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginScreen;
