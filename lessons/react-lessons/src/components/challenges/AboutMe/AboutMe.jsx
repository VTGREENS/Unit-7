import React from "react";

function AboutMe(){
    const City = "Middlebury";
    const State = "Vermont";
return(
    <React.Fragment>
    <p>{City}, {State}</p>
    <ul style ={{listStyleType: "none"}}>
        <li>Sweden</li>
        <li>Mexico</li>
        <li>Delaware...</li>
    </ul>
    </React.Fragment>
  )
}

export default AboutMe