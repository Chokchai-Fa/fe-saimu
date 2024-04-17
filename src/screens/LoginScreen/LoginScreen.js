import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import "./index.css";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    // validation input form
    if ((email == "") || (password == "")) {
      if (email == "") {
        errorNotify("email cannot empty");
      }

      if (password == "") {
        errorNotify("password cannot empty");
      }
    }else{
      // if password is correct and can login
      navigate("/home");
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
