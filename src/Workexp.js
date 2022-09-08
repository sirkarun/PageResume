import React from "react";

import Widecard from "./Widecard";
function Workexp(){
    return(
        <div className="condiv">
            <h1 className="subtopic">Work Experience</h1>
            <Widecard key="1" title="2018-ปัจจุบัน" where="บริษัท จันวาณิชย์ ซีเคียวริตี้ พริ้นท์ติ้ง จำกัด" detail="Senior Programmer"></Widecard>
            <Widecard key="2" title="2017-2018" where="บริษัท มิลลิเมด จํากัด" detail="Programmer"></Widecard>
            <Widecard key="3" title="2016-2017" where="บริษัท กรุงไทยอาหาร จํากัด มหาชน" detail="Programmer"></Widecard>
        </div>
    )
}
 
export default Workexp