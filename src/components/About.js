import React from "react";
import styled from "@emotion/styled";



const LeftHalf = styled.div`
  min-height: 410px;
  box-sizing: border-box;
  justify-content: space-between;
`;

// const RightHalf = styled.div`
//   min-height: 410px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   max-width: 80vh;
// `;

const Title = styled.div`
  min-height: 260px;
  align-items: center;
  font-family: sans-serif;
`;
const SecondTitle = styled.span`
  font-size: 32px !important;
  align-items: center;
  font-family: sans-serif;
  font-weight: bold;
`;
const LeftText = styled.div`
  background: #202020;
  min-height: 150px;
  padding: 20px;
  color: lightgray;
  font-family: sans-serif;
`;
const SectionTitles = styled.div`
  font-size: 12pt;
  color: #646363;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: black;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #6E6E6E;
  margin-bottom: 70px;
  margin-left: 23px;
  margin-right: 23px;
`;

const AboutUs = () => {
  return (
    <>
      <SectionTitles className="text-center text-uppercase">
        Welcome
      </SectionTitles>
      <SectionHeading>WHO WE ARE</SectionHeading>
      <SectionDescription>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SectionDescription>
      <div className="container-lg px-5">
        <div className="row">
          <LeftHalf className="col-md-5">
            <Title className="row">
              <div className="col fs-6">
                ABOUT US <br /> <SecondTitle>Detailing Experts</SecondTitle>
              </div>
            </Title>

            <LeftText className="row">
              <div className="col">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
            </LeftText>
          </LeftHalf>

          <div className="col-md-7 carpic" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
