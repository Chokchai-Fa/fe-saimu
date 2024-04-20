import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { ToastContainer } from "react-toastify";
import { errorNotify, successNotify } from "../../components/Toast";
import { useNavigate } from "react-router-dom";

import "./index.css";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";
import axios from "axios";
import { useState } from "react";
import { BE_HOST } from "../../App";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      password != confirmPassword
    ) {
      if (email == "") {
        errorNotify("email cannot empty");
      }

      if (password == "") {
        errorNotify("password cannot empty");
      }

      if (confirmPassword == "") {
        errorNotify("confirm password cannot empty");
      }

      if (password != confirmPassword) {
        errorNotify("password and confirm password missmatch!");
      }
    } else {
      // call api for signup
      try {
        const response = await axios.post(`${BE_HOST}/signup`, {
          email: email,
          full_name: fullName,
          password: password,
        });
        if (response.status == 200) {
          successNotify("register successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (e) {
        errorNotify("signup failed, please try again");
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
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
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
