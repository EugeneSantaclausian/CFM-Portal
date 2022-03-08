import React from "react";
import "../App.css";
import Logo from "../images/logo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
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
            <p className="text-center text-muted fs-6 mb-4">Login As Admin</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <div className="d-grid gap-2 py-4">
                <Button variant="primary" type="button" className="py-2">
                  Submit
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
            <a href="/">Central Fellowship Ministries</a>
          </p>
        </div>
        {/*FOOTER*/}
      </div>
    </div>
  );
}
