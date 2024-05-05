import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";

const PackageTitle = styled.div`
  font-size: 18pt;
  color: white;
  margin-top: 30px;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const Items = styled.div`
  color: white;
  font-size: 18px;
  text-transform: capitalize;
`;
const Logo = styled.i`
  margin-right: 10px;
  color: yellow;
`;

const Price = styled.span`
  color: white;
`;
const AddonList = ({ texts, price }) => {
  return (
    <>
      {_.isArray(texts) && (
        <>
          {texts.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-6">
                  <Items className="col-12">
                    <Logo className="bi bi-bookmark-check" />
                    {v}
                  </Items>
                </div>
                <div className="col-6">
                  <div>
                    
                    <Logo className="bi bi-arrow-right"/>
                    <Price className="ms-3">{price}</Price>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};
const AddOn = () => {
  return (
    <>
      <PackageTitle className="text-center">Extras</PackageTitle>

      <div className="container">
        <div className="row">
          <AddonList texts={["Exterior Plastic Restoration"]} price={["$30.00 - $50.00"]}/>
          <AddonList texts={["Each additional floor mat"]} price={["$5.00"]}/>
          <AddonList texts={["Headliner spot treatment"]} price={["$25.00 - $50.00"]}/>
          <AddonList texts={["Pet Hair"]} price={["$40.00 - $80.00"]}/>
          <AddonList texts={["Smoke damage"]} price={["$100.00 - $250.00"]}/>
          <AddonList texts={["Mold damage"]} price={["$50.00 - $100.00"]}/>
          <AddonList texts={["Excess Dirt/Gravel"]} price={["$80.00 - $250.00"]}/>
          <AddonList texts={["Car seat"]} price={["$30.00"]}/>
          <AddonList texts={["Storage compartments"]} price={["$25.00"]}/>
          <AddonList texts={["Minor scratch removal"]} price={["$25.00"]}/>
          <AddonList texts={["Headlight Restoration"]} price={["$30.00"]}/>
          <AddonList texts={["Engine Cleaning"]} price={["$40.00"]}/>
        </div>
      </div>
    </>
  );
};

export default AddOn;
