import React,{useState} from "react";

function Skill(){

    const [skills] =useState(['Html','C#','X++','Angular','PHP','React']);

    return(
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
                {skills.map((value)=>
                {
                    return <li>{value}</li>
                }) }
            </ul>
        </div>
    )
}
export default Skill