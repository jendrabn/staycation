import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";

export default function NotFound(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          Are you lost?
          <p className="pt-4">
            Some page are still in development, maybe you can go back if you
            want
          </p>
          <div>
            <Button
              className="btn mt-5"
              type="button"
              onClick={() => navigate(-1)}
              isLight
            >
              Yes, bring me to safe place please
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
