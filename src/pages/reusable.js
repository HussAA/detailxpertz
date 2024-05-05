import React from 'react'

const Reuse = () => {
  return (
    <div>Reuse</div>
  )
}

export default Reuse

// import styled from "@emotion/styled";
// import React, { useState } from 'react';
// import { Collapse, Button, Card, CardBody } from 'reactstrap'; // Import Bootstrap components

// const ReusableComponents = () => {
//   return (
//     <>
//       <section style={{ paddingBottom: "400px" }}>
//         <Services />
//       </section>
//       <section style={{ paddingBottom: "400px" }}>
//         <WhyUs />
//       </section>
//       <section className="section-bg" style={{ paddingBottom: "400px" }}>
//         <Faq />
//       </section>
//     </>
//   );
// };
// const Faq = () => {
//   // State to manage which FAQ items are open
//   const [openItems, setOpenItems] = useState([]);

//   // Function to toggle FAQ item
//   const toggleItem = (index) => {
//     if (openItems.includes(index)) {
//       setOpenItems(openItems.filter(item => item !== index));
//     } else {
//       setOpenItems([...openItems, index]);
//     }
//   };

//   const faqData = [
//     {
//       question: 'What is Gatsby?',
//       answer: 'Gatsby is a React-based open-source framework for building websites and apps.'
//     },
//     {
//       question: 'How do I install Gatsby?',
//       answer: 'You can install Gatsby using the Gatsby CLI: npm install -g gatsby-cli'
//     },
//     {
//       question: 'What can I build with Gatsby?',
//       answer: 'You can build static websites, blogs, e-commerce sites, and more with Gatsby.'
//     },
//     {
//       question: 'Is Gatsby SEO-friendly?',
//       answer: 'Yes, Gatsby provides features like server-side rendering and pre-rendering for optimal SEO performance.'
//     },
//     {
//       question: 'Can I use Bootstrap with Gatsby?',
//       answer: 'Yes, you can integrate Bootstrap styles and components into your Gatsby project.'
//     }
//   ];

//   return (
//     <>
//       <div className="faq-container">
//       <h2>FAQ</h2>
//       {faqData.map((item, index) => (
//         <Card key={index} className="faq-item">
//           <Button
//             color="link"
//             className="faq-question d-flex justify-content-between align-items-center"
//             onClick={() => toggleItem(index)}
//           >
//             {item.question}
//             <i className={`bi bi-chevron-${openItems.includes(index) ? 'up' : 'down'}`}style={{ fontSize: '1.2em' }}></i>
//           </Button>
//           <Collapse isOpen={openItems.includes(index)}>
//             <CardBody>
//               {item.answer}
//             </CardBody>
//           </Collapse>
//         </Card>
//       ))}
//     </div>
//     </>
//   );
// };

// const WhyUs = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="section-title">
//           <div className="section-h2">Why Us</div>
//           <div className="section-p">
//             Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
//             aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
//             quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
//             fugiat sit in iste officiis commodi quidem hic quas.
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-4">
//             <div className="box">
//               <span>01</span>
//               <div className="box-title">Lorem Ipsum</div>
//               <div className="box-p">
//                 Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
//                 consectetur ducimus vero placeat
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mt-4 mt-lg-0">
//             <div className="box">
//               <span>02</span>
//               <div className="box-title">Repellat Nihil</div>
//               <div className="box-p">
//                 Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
//                 consectetur ducimus vero placeat
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 mt-4 mt-lg-0">
//             <div className="box">
//               <span>03</span>
//               <div className="box-title">Ad ad velit qui</div>
//               <div className="box-p">
//                 Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
//                 consectetur ducimus vero placeat
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Title = styled.div`
//   font-weight: 600;
//   margin-bottom: 15px;
//   font-size: 18px;
//   position: relative;
//   padding-bottom: 15px;
//   ::after {
//     content: "";
//     position: absolute;
//     display: block;
//     width: 50px;
//     height: 2px;
//     bottom: 0px;
//     left: calc(50% - 25px);
//     background: rgb(92, 159, 36);
//   }
// `;

// const Services = () => {
//   return (
//     <>
//       <div className="container text-center">
//         <div className="section-title">
//           <div className="section-h2">Services</div>
//           <div className="section-p">
//             Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
//             aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
//             quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
//             fugiat sit in iste officiis commodi quidem hic quas.
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6 col-lg-4 p-3">
//             <div className="icon">
//               <i className="bi bi-briefcase"></i>
//             </div>
//             <Title className="mb-3 pb-2">Lorem Ipsum</Title>
//             <div className="">
//               Voluptatum deleniti atque corrupti quos dolores et quas molestias
//               excepturi sint occaecati cupiditate non provident
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4 p-3">
//             <div className="icon">
//               <i className="bi bi-briefcase"></i>
//             </div>
//             <Title className="mb-3 pb-2">Lorem Ipsum</Title>
//             <div className="">
//               Voluptatum deleniti atque corrupti quos dolores et quas molestias
//               excepturi sint occaecati cupiditate non provident
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4 p-3">
//             <div className="icon">
//               <i className="bi bi-briefcase"></i>
//             </div>
//             <Title className="mb-3 pb-2">Lorem Ipsum</Title>
//             <div className="">
//               Voluptatum deleniti atque corrupti quos dolores et quas molestias
//               excepturi sint occaecati cupiditate non provident
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4 p-3">
//             <div className="icon">
//               <i className="bi bi-briefcase"></i>
//             </div>
//             <Title className="mb-3 pb-2">Lorem Ipsum</Title>
//             <div className="">
//               Voluptatum deleniti atque corrupti quos dolores et quas molestias
//               excepturi sint occaecati cupiditate non provident
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4 p-3">
//             <div className="icon">
//               <i className="bi bi-briefcase"></i>
//             </div>
//             <Title className="mb-3 pb-2">Lorem Ipsum</Title>
//             <div className="">
//               Voluptatum deleniti atque corrupti quos dolores et quas molestias
//               excepturi sint occaecati cupiditate non provident
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4 p-3">
//             <div className="icon">
//               <i className="bi bi-briefcase"></i>
//             </div>
//             <Title className="mb-3 pb-2">Lorem Ipsum</Title>
//             <div className="">
//               Voluptatum deleniti atque corrupti quos dolores et quas molestias
//               excepturi sint occaecati cupiditate non provident
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReusableComponents;
