import React from "react";
import { styled } from "styled-components";
import Checkmark from "../images/checkmark.png";
import { TawkContext } from "../providers";
const PackageTitle = styled.div`
  font-size: 12pt;
  color: white;

  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: white;
  text-align: center;
  font-family: sans-serif;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #979797;
  margin-bottom: 40px;
  margin-left: 23px;
  margin-right: 23px;
  padding-left: 50px;
  padding-right: 50px;
`;
const PricingColumn = styled.div`
  background: white;
  height: 580px;
  margin-top: 30px;
  border-radius: 1rem;

  @media (max-width: 991.9px) {
    margin-bottom: 30px;
  }
`;
const PricingColumnCenter = styled.div`
  background: #16192c;
  height: 640px;
  border-radius: 1rem;
`;
const PricingCard = styled.div`
  width: auto;
  padding: 13px;
`;
const PricingCardCenter = styled.div`
  width: auto;
  padding: 13px;
`;

const PricingTitles = styled.div`
  font-size: 18pt;
  color: #16192c;
`;
const PricingTitlesCenter = styled.div`
  font-size: 18pt;
  color: #5e6aba;
`;
const PricingPopular = styled.button`
  max-width: 100px;
  width: fit-content;
  padding: 5px 5px 5px 5px;
  border-radius: 25rem;
  color: white;
  border: 0 solid green;
  background: #5d9310;

  &:hover {
    cursor: default;
  }
`;
const PricingCost = styled.div`
  font-size: 28pt;
  color: #16192c;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const PricingCostCenter = styled.div`
  font-size: 28pt;
  color: white;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const PricingCostSpan = styled.span`
  font-size: 14pt;
  color: #828282;
  font-weight: 500;
`;
const PricingCoverage = styled.div`
  font-size: 15px;
  color: #4f4f4f;
  min-height: 72px;
`;
const PricingCoverageCenter = styled.div`
  font-size: 15px;
  color: #e8e8e8;
  min-height: 68px;
`;
const PricingHr = styled.hr`
  color: lightgray;
`;
const Check = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  margin-top: 2px;
`;
const PricingFeatures = styled.div`
  font-size: 15px;
  color: black;
  margin-bottom: 15px;
  display: flex;
  @media screen and (min-width: 500px), (max-width: 768px) {
  }
`;

const PricingFeaturesCenter = styled.div`
  font-size: 15px;
  color: white;
  margin-bottom: 15px;
  display: flex;
`;

const PricingButton = styled.button`
  width: 80%;
  height: 46px;
  border-radius: 7px;
  border: 0;
  background: #16192c;
  color: white;
  font-size: 14pt;
  transition: 0.2s;
  &:hover {
    background: #373f6c;
  }
`;
const PricingButtonCenter = styled.button`
  width: 80%;
  height: 44px;
  border-radius: 7px;
  background: #5e6aba;
  color: black;
  border: 0;
  font-size: 14pt;
  margin-top: 45px;
  transition: 0.2s;
  &:hover {
    background: #3f4888;
  }
`;
const ArrowStyle = styled.i`
  width: 18px;
  height: 18px;
  margin-left: 3px;
  margin-right: 15px;
  color: #02bc7d;
`;

const ListStyle = styled.div`
  font-size: 15px;
  color: white;
  margin-bottom: 10px;
  color: #02bc7d;
`;
const ArrowStyle2 = styled.i`
  width: 18px;
  height: 18px;
  margin-left: 3px;
  margin-right: 15px;
  color: #5e6aba;
`;

const ListStyle2 = styled.div`
  font-size: 15px;
  color: white;
  margin-bottom: 10px;
  color: #5e6aba;
`;
const ExteriorPackage = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  return (
    <>
      <PackageTitle id="Packages" className="text-center text-uppercase">
        packages
      </PackageTitle>
      <SectionHeading>OUR EXTERIOR PACKAGES</SectionHeading>
      <SectionDescription>
        Transform your vehicle with our Exterior Package, including a thorough
        hand wash, wax application, and tire shine for a pristine and protected
        finish.
      </SectionDescription>
      <div className="container-xl pricing-md-max">
        <div className="row">
          <PricingColumn className="col-lg-4">
            <PricingCard>
              <div className="row">
                <PricingTitles className="col">Starter</PricingTitles>
              </div>
              <div className="row">
                <PricingCost className="col">
                  $80 <PricingCostSpan>/Starting</PricingCostSpan>
                </PricingCost>
              </div>
              <div className="row">
                <PricingCoverage className="col">
                  Ideal for a basic detail of your vehicle.
                </PricingCoverage>
              </div>
              <hr />
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Exterior wash
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col ">
                  <Check src={Checkmark} />
                  Tire shine
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </PricingFeatures>
              </div>
              <div className="text-center">
                <PricingButton
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  className="col"
                >
                  Book Now
                </PricingButton>
              </div>
            </PricingCard>
          </PricingColumn>

          <PricingColumnCenter className="col-lg-4">
            <PricingCardCenter>
              <div className="row">
                <PricingTitlesCenter className="col">Pro</PricingTitlesCenter>
              </div>
              <div className="row">
                <PricingCostCenter className="col">
                  $150 <PricingCostSpan>/Starting</PricingCostSpan>
                </PricingCostCenter>
              </div>
              <div className="row">
                <PricingCoverageCenter className="col">
                  Ideal for a thorough exterior detailing experience.
                </PricingCoverageCenter>
              </div>
              <PricingHr />
              <div className="row">
                <ListStyle className="col">
                  <ArrowStyle className="bi bi-arrow-90deg-down" />
                  Starter package, plus
                </ListStyle>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />
                  Premium Wax
                </PricingFeaturesCenter>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />1 Set removable floor mats
                </PricingFeaturesCenter>
              </div>
              <div className="row">
                <PricingFeaturesCenter className="col">
                  <Check src={Checkmark} />
                  Clean Rims
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </PricingFeaturesCenter>
              </div>
              <div className="text-center">
                <PricingButtonCenter
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  className="col"
                >
                  Book Now
                </PricingButtonCenter>
              </div>
            </PricingCardCenter>
          </PricingColumnCenter>

          <PricingColumn className="col-lg-4">
            <PricingCard>
              <div className="row">
                <PricingTitles className="col">Premium</PricingTitles>
                <PricingPopular className="col">Popular</PricingPopular>
              </div>
              <div className="row">
                <PricingCost className="col">
                  $200 <PricingCostSpan>/Starting</PricingCostSpan>
                </PricingCost>
              </div>
              <div className="row">
                <PricingCoverage className="col">
                  Ideal for protection for your vehicle.
                </PricingCoverage>
              </div>
              <hr />
              <div className="row">
                <ListStyle2 className="col">
                  <ArrowStyle2 className="bi bi-arrow-90deg-down" />
                  Pro package, plus
                </ListStyle2>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Polish
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  polish rims
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Exterior plastic restoration
                </PricingFeatures>
              </div>
              <div className="row">
                <PricingFeatures className="col">
                  <Check src={Checkmark} />
                  Iron removal
                  <br />
                  <br />
                  <br />
                  <br />
                </PricingFeatures>
              </div>

              <div className="text-center">
                <PricingButton
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  className="col"
                >
                  Book Now
                </PricingButton>
              </div>
            </PricingCard>
          </PricingColumn>
        </div>
      </div>
    </>
  );
};

export default ExteriorPackage;
