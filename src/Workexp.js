import React from "react";

import Widecard from "./Widecard";
function Workexp() {
  return (
    <div className="condiv">
      <h1 className="subtopic">Work Experience</h1>
      <Widecard
        key="1"
        title="2023-ปัจจุบัน"
        where="Gulf energy development public company limited (Outsource)"
        detail="Developed and designed the GULF1 Residential Portal.

Utilized React, TypeScript, and Ant Design for UI development and .NET 9 for backend services.

Developed and optimized the E-Bidding System using Vue, JavaScript, Vuetify, and .NET 7.

Integrated Google reCAPTCHA and Google Maps API to enhance system security and performance.

Developed the Lube Oil System using React, JavaScript, Ant Design, and .NET 9.

Implemented Azure Functions to process files from Blob Storage.

Developed an Incident Management System using Next.js, TypeScript, Ant Design for UI, and Go for backend."
      ></Widecard>
      <Widecard
        key="1"
        title="2018-2023"
        where="บริษัท จันวาณิชย์ ซีเคียวริตี้ พริ้นท์ติ้ง จำกัด"
        detail="Senior Programmer"
      ></Widecard>
      <Widecard
        key="2"
        title="2017-2018"
        where="บริษัท มิลลิเมด จํากัด"
        detail="Programmer"
      ></Widecard>
      <Widecard
        key="3"
        title="2016-2017"
        where="บริษัท กรุงไทยอาหาร จํากัด มหาชน"
        detail="Programmer"
      ></Widecard>
    </div>
  );
}

export default Workexp;
