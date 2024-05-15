import React from "react"
import Image1 from "../images/Image1.webp"
import Image2 from "../images/Image2.webp"
import Image3 from "../images/Image3.webp"
import Image4 from "../images/Image4.webp"
import Image6 from "../images/Image6.webp"
import Image8 from "../images/Image8.webp"
import Image10 from "../images/Image10.webp"
import Image12 from "../images/Image12.webp"
import Image13 from "../images/Image13.webp"
import Image14 from "../images/Image14.webp"
import Image15 from "../images/Image15.webp"
import Image16 from "../images/Image16.webp"
import Image17 from "../images/Image17.webp"
import Image18 from "../images/Image18.webp"

import ImageGallery from "react-image-gallery";
// import styled from "@emotion/styled"
const images = (() => {
  return [
    Image1,
    Image2,
    Image3,
    Image4,
    Image16,
    Image6,
    Image8,
    Image15,
    Image13,
    Image12,
    Image10,
    Image14,
    Image17,
    Image18,

  ].map(i => {
    return {
      original: i,
      thumbnail: i,
      thumbnailHeight: 100,
      originalHeight:450,
      
    }
  })
})()
// const SectionHeading = styled.div`
//   font-size: 35pt;
//   color: black;
//   text-align: center;
//   text-transform: uppercase;
//   @media screen and (max-width: 600px) {
//     font-size: 25pt;
//   }
// `
const AllGallery = () => {
  return (
    <>
  
    <div className="container-lg">
      <ImageGallery disableThumbnailScroll showIndex autoPlay lazyLoad items={images} />
    </div>
      
    </>
  )
}


export default AllGallery
