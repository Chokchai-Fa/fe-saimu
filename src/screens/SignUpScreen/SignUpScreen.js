import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";
import { useState } from "react";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("xxx",password, confirmPassword);

    console.log(password != confirmPassword)

    if (email == ""){
        errorNotify("email cannot empty");
    }

    if (password == ""){
        errorNotify("password cannot empty");
    }

    if (confirmPassword == ""){
        errorNotify("confirm password cannot empty");
    }

    if (password != confirmPassword) {
      errorNotify("password and confirm password missmatch!");
    }

    // call api for signup
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </Form.Group>
              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Signup
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpScreen;
