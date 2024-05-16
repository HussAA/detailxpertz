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
  margin-right: 7px;
  color: yellow;
`;

const Price = styled.span`
  color: white;
`;

const AddonListP = ({ texts, price }) => {
  return (
    <>
      {_.isArray(texts) && (
        <>
          {texts.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-8">
                  <Items className="col-12">
                    <Logo className="bi bi-bag-plus" />
                    {v}
                  </Items>
                </div>
                <div className="col-4">
                  <div>
                    
                    <Logo className="bi bi-arrow-right"/>
                    <Price className="">{price}</Price>
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
const AddonList = ({ texts, price }) => {
  return (
    <>
      {_.isArray(texts) && (
        <>
          {texts.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-8">
                  <Items className="col-12">
                    <Logo className="bi bi-bookmark-check" />
                    {v}
                  </Items>
                </div>
                <div className="col-4">
                  <div>
                    
                    <Logo className="bi bi-arrow-right"/>
                    <Price className="">{price}</Price>
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
const ExtAddOn = () => {
  return (
    <>
      <PackageTitle className="text-center">Extras (Excluded from discount)</PackageTitle>

      <div className="container noPadding">
        <div className="row">
          <AddonListP texts={["Motorcycle Detail"]} price={["$150"]}/>
          <AddonListP texts={["Semi Truck Detail"]} price={["$200 - $250"]}/>
          <AddonList texts={["Exterior Plastic Restoration"]} price={["$30 - $50"]}/>
          <AddonList texts={["Minor scratch removal"]} price={["$10 /each"]}/>
          <AddonList texts={["Headlight Restoration"]} price={["$30"]}/>
          <AddonList texts={["Engine Cleaning"]} price={["$40"]}/>
        </div>
      </div>
    </>
  );
};

export default ExtAddOn;
