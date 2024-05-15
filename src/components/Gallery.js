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
  color: #6e6e6e;
  margin-bottom: 50px;
  margin-left: 23px;
  margin-right: 23px;
`;
class Gallery extends Component {
  render() {
    const before1 = require("../images/before1.webp").default;
    const after1 = require("../images/after1.webp").default;
    const before2 = require("../images/Image11.webp").default;
    const after2 = require("../images/Image5.webp").default;
    const before4 = require("../images/Image7.webp").default;
    const after4 = require("../images/Image9.webp").default;
    const before5 = require("../images/before11.webp").default;
    const after5 = require("../images/after11.webp").default;

    return (
      <>
        <SectionTitles className="text-center text-uppercase">
          Gallery
        </SectionTitles>
        <SectionHeading>Before & After Showcase</SectionHeading>
        <SectionDescription>
          Explore our Before and After Gallery to witness stunning
          transformations showcasing the remarkable difference our detailing
          services can make.
        </SectionDescription>

        <div className="container mb-5 padding-gallery">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-3">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before1}
                rightImage={after1}
                aspectRatio="taller"
              />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-3">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before2}
                rightImage={after2}
              />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before4}
                rightImage={after4}
              />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <ReactCompareImage
                alt="before/after pics"
                leftImage={before5}
                rightImage={after5}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;
