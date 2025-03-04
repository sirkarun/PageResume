import React from "react";
import Widecard from "./Widecard";
function Education() {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Education</h1>
      <Widecard
        key="1"
        title="ปริญญาตรี"
        where="มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก วิทยาเขตจักรพงษภูวนารถ ระบบสารสนเทศ เกรด 3.59"
      ></Widecard>
      <Widecard
        key="2"
        title="ปวช-ปวส"
        where="วิทยาลัยการอาชีพพระสมุทรเจดีย์"
      ></Widecard>
    </div>
  );
}

export default Education;
