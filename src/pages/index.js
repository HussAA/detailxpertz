import AppNavBar from "../components/Navbar";
import * as React from "react";
import styled from "@emotion/styled";
import AboutUs from "../components/About";
import LandingSection from "../components/LandingSection";
import Gallery from "../components/Gallery";
import ScrollArrow from "../components/ScrollButton";
import Pricing from "../components/package";
import Footer from "../components/Footer";
import AddOn from "../components/AddOn";
import { Helmet } from "react-helmet";
import Services from "../components/Services";
import AllGallery from "../components/allGallery";
import ExtAddOn from "../components/ExteriorAddOn";
import ExteriorPackage from "../components/ExteriorPackage";
const PricingSection = styled.section`
  background: #1e3f68;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: hidden;
  @media (max-width:991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width:500px) {
    padding-left: 1px;
    padding-right: 1px;
  }
`;
const ExteriorPackageSection = styled.section`
  background: #272727;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: hidden;
  @media (max-width:991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width:500px) {
    padding-left: 1px;
    padding-right: 1px;
  }
`;
const IndexPage = () => {
  return (
    <>
     <Helmet>
        <title>Detailxpertz</title>
      </Helmet>
      <header>
        <section style={{ minHeight: "100px" }}>
          <AppNavBar />
        </section>
      </header>
      <body>
        <section>
          <LandingSection />
        </section>
        <section id="About" style={{ marginTop: "80px", paddingTop: "80px" }}>
          <AboutUs />
        </section>
        
        <PricingSection style={{ marginTop: "100px", paddingTop: "120px" }}>
          <Pricing />
          <div>
            <AddOn/>
          </div>
        </PricingSection>
        <ExteriorPackageSection style={{ paddingTop: "120px" }}>
          <ExteriorPackage />
          <div>
            <ExtAddOn/>
          </div>
        </ExteriorPackageSection>
        <section
          id="Services"
          style={{
            marginBottom: "100px",
            paddingTop: "120px",
          }}
        >
          <Services />
        </section>
        <section
          id="Gallery"
          style={{
            marginBottom: "100px",
            paddingTop: "50px",
          }}
        >
          <Gallery />
        </section>
        <section>
          <AllGallery/>
        </section>
        <section>
          <Footer/>
        </section>
        <section>
          <ScrollArrow />
        </section>
      </body>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
