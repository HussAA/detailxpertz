import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
import styled from "@emotion/styled";

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
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #6E6E6E;
  margin-bottom: 50px;
  margin-left: 23px;
  margin-right: 23px;
`;
class Gallery extends Component {
  render() {
    const before1 = require("../images/before1.webp").default;
    const after1 = require("../images/after1.webp").default;
    const before2 = require("../images/before10.webp").default;
    const after2 = require("../images/after10.webp").default;
    const before3 = require("../images/before3.webp").default;
    const after3 = require("../images/after3.webp").default;
    const before4 = require("../images/before4.webp").default;
    const after4 = require("../images/after4.webp").default;
    const before5 = require("../images/before11.webp").default;
    const after5 = require("../images/after11.webp").default;
    const before6 = require("../images/before7.webp").default;
    const after6 = require("../images/after7.webp").default;



    return (
      <>
        <SectionTitles className="text-center text-uppercase">
          Gallery
        </SectionTitles>
        <SectionHeading>Before & After Showcase</SectionHeading>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SectionDescription>

        <div className="container mb-5 padding-gallery">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage alt="before/after pics" leftImage={before1} rightImage={after1} />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage alt="before/after pics" leftImage={before2} rightImage={after2} />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage alt="before/after pics" leftImage={before3} rightImage={after3} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage alt="before/after pics" leftImage={before4} rightImage={after4} />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage alt="before/after pics" leftImage={before5} rightImage={after5} />
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <ReactCompareImage alt="before/after pics" leftImage={before6} rightImage={after6} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;
