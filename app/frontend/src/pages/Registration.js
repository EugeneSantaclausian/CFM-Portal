import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RegistrationForm from "../components/RegistrationForm";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-light"
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        overflow: "auto",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between py-3 border-bottom">
          <h5 className="text-dark display-6 fw-bolder align-self-center">
            Membership Form
          </h5>

          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            className="align-self-center"
            onClick={() => navigate("/home")}
          >
            <CloseIcon sx={{ color: "black", fontSize: 30 }} />
          </IconButton>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
