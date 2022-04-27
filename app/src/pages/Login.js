/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Auth from "../services/loginService";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState("");
  const [passwordState, setPasswordState] = useState("password");
  const viewPassword = () => {
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //Validation
    if (!email) {
      setText(`Please enter your email`);
      return setError(true);
    } else if (!password) {
      setText(`Please enter your password`);
      return setError(true);
    }

    setLoading(true);
    setError(false);
    setSuccess(false);
    try {
      const response = await Auth.login(email, password);
      console.log("RES:", response);
      return navigate("/home");
    } catch (err) {
      setText(err.message);
      setError(true);
      return setLoading(false);
    }
  };

  return (
    <div className="App-Full-Page bg-light">
      <div
        className="container bg-white border-start border-end pt-1"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div className="text-center">
          <img
            src={Logo}
            alt="img"
            style={{ width: 100, borderRadius: 50 }}
            className="bg-white mx-2 my-4 shadow"
          />
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 col-sm-12 px-4">
            {/*Form*/}
            <h4
              className="text-center text-dark border-top border-bottom fs-3 py-3"
              style={{ fontFamily: "Poppins Medium" }}
            >
              Registration Portal
            </h4>
            <p
              className={
                error
                  ? "text-center text-muted fs-6 mb-2"
                  : "text-center text-muted fs-6 mb-4"
              }
            >
              Login As Admin
            </p>
            {error && <Alert variant={"danger"}>{text}</Alert>}
            <Form onSubmit={(e) => loginUser(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  disabled={loading ? true : false}
                  onInput={() => {
                    setText("");
                    setError(false);
                    setSuccess(false);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={passwordState}
                    ref={passwordRef}
                    disabled={loading ? true : false}
                    onInput={() => {
                      setText("");
                      setError(false);
                      setSuccess(false);
                    }}
                  />
                  <InputGroup.Text>
                    <IconButton
                      size="sm"
                      color="inherit"
                      style={{ padding: 0 }}
                      onClick={() => viewPassword()}
                    >
                      {passwordState === "password" ? (
                        <VisibilityOffIcon
                          sx={{ color: "#979797", fontSize: 20, margin: 0 }}
                        />
                      ) : (
                        <VisibilityIcon
                          sx={{ color: "#979797", fontSize: 20, margin: 0 }}
                        />
                      )}
                    </IconButton>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <div className="d-grid gap-2 py-4">
                <Button
                  variant="primary"
                  type="submit"
                  className="py-2"
                  disabled={loading ? true : false}
                >
                  {loading ? (
                    <div className="text-center">
                      <Spinner animation="border" variant={"white"} />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </Form>
            {/*Form*/}
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>

        {/*FOOTER*/}
        <div>
          <p className="text-center text-muted fs-6 mb-0">
            © Copyright({new Date().getFullYear()}).
          </p>
          <p className="text-center text-muted fs-6 mt-0">
            <a
              href="https://cfmgracearena.wixsite.com/home"
              target="_blank"
              rel="noreferrer"
            >
              Central Fellowship Ministries
            </a>
          </p>
        </div>
        {/*FOOTER*/}
      </div>
    </div>
  );
}
