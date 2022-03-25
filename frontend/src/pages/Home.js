import React from "react";
import NavBar from "../components/NavBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-light"
      style={{
        height: "100%",
        width: "100%",
        //backgroundColor: "#eef3f7",
        position: "absolute",
        overflow: "auto",
      }}
    >
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <div className="">
          <div className="d-flex justify-content-between py-5">
            <h5 className="text-dark display-6 fw-bold">Members</h5>
            <Button
              variant="primary"
              type="button"
              className="align-self-center rounded-pill px-4 py-2"
              onClick={() => navigate("/register")}
            >
              Register Member
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
