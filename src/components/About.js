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
  color: #6e6e6e;
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
        At Detailxpertz, we are passionate about restoring the beauty of every
        vehicle we touch. With years of experience and a commitment to
        excellence, we thrive by meticulously transforming cars into works of
        art. Discover the difference with Detailxpertz – where every detail
        matters.
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
                We are dedicated to enhancing the beauty and longevity of your
                car through our comprehensive detailing services, using only the
                finest products and techniques.
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
