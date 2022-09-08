import React from "react";

function Widecard({title,where,detail}){
    return(
        <div className="widecard">
            <div className="wide-con">
                <h3 >{title}</h3>
                <h4 className="secondtext">{where}</h4>
                <h4 className="thirdtext">{detail}</h4>
            </div>
        </div>
    )
}
export default Widecard