// You can use a react fragment instead of a div to house your single JSX component.
// Wrap tags can either be <React.Fragment></React.Fragment> or you can use empty tags <> </>

import React from "react";

function ChallengeOneInstructions() {
    let styles = {
        ul: {
            textAlign: "left",
            color: "red"
        },
    };
    return(
    <React.Fragment>
        <h3>Create the following:</h3>
        <ul style={styles.ul}>
                <li>Create a new folder called Aboutme</li>
                <li> Create a new file inside the folder called AboutMe.jsx</li>
                <li>create a p tag  where you grew up (city/state)- use variables for city and state</li>
                <li>an unordered list with three places you have visited</li>
            </ul>
    </React.Fragment>
  );
}

export default ChallengeOneInstructions;