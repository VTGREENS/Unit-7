## Simple React Extension Snippets Common Ones
- sfc: stateless functional Component
- imrs: imports react and usestate
- imrse: imports react, useState, useEffect
- uef: useEffect
- usf: useState



## React Inline Styling
On the html element you will use the style attribute and you will set it equal to an object.

Examples:
```jsx
<h3>Create the following:</h3>
        <ul style={{textAlign: "left"}}>
                <li>Create a new folder called Aboutme</li>
                <li> Create a new file inside the folder called AboutMe.jsx</li>
                <li>create a p tag  where you grew up (city/state)- use variables for city and state</li>
                <li>an unordered list with three places you have visited</li>
            </ul>

```

Another Example of this would be to create "styles" variable inside the function and reference the object later in the code.

```jsx
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
```