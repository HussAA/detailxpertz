import React from "react";
import styled from "@emotion/styled";
import Landingimage from "../images/main.webp";
import { Alert } from "@mui/material";

const Slogan = styled.div`
  font-size: 25pt;
  font-family: system-ui;
  font-style: italic;
  color: black;
  @media screen and (max-width: 767px) {
    font-size: 17pt;
  }
  @media screen and (max-width: 521px) {
    font-size: 13pt;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 96%;
  left: 25%;
  width: 50%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.6);
  color: white;
  text-align: center;
  padding: 10px;

  @media (max-width: 730.1px) {
    left: 20%;
    width: 60%;
    top: 95%;
  }
  @media (min-width: 1300px) {
    top: 97%;
  }
`;
const SloganPortfolio = () => {
  return (
    <>
      <div className="container text-center">
        <Overlay className="shadow">
          <Slogan>
            Edmonton, AB, Canada (50KM radius){" "}
            <div style={{ fontSize: "17px" }}>***Travel is extra***</div>
          </Slogan>
        </Overlay>
      </div>
    </>
  );
};

const Masthead = styled.div`
  position: relative;
  height: 60vh;
  margin-top: auto;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(
      to bottom,
      rgba(30, 63, 104, 0.2) 0%,
      rgba(30, 63, 104, 0.2) 100%
    ),
    url(${Landingimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1299.6px) {
    height: 80vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;
    margin-left: 45px;
    margin-right: 45px;
  }
  @media (max-width: 730px) {
    height: 35vh;
  }
`;

const LandingSection = () => {
  const [showDiscountAlert, setShowDiscountAlert] = React.useState(true);
  return (
    <>
      <div>
        {showDiscountAlert && ( // Display the discount alert if showDiscountAlert is true
          <Alert
            severity="info"
            onClose={() => setShowDiscountAlert(false)} // Close the alert when dismissed
          >
            First-time customers get 20% off! + Multiple vehicles discount
          </Alert>
        )}
      </div>

      <Masthead>
        <SloganPortfolio />
      </Masthead>
    </>
  );
};

export default LandingSection;
