import './App.css';
import Nav from './components/Nav/Nav';
import { useState } from 'react'
import Welcome from './components/Welcome/Welcome';
import Counter from './components/Counter/Counter';


// ? Root functional component 
// ? Purpose is to render HTML
function App() {

let year = 2023

// let firstName = "Leif"
// let lastName = "Jackson"

/*  USE STATE EX
let myobj = {
  name:["Paul", "John", "Jess"],
  age: [22, 17, 38]
}

let { name, age} = myobj

myobj.name.forEach(i => console.log(i))

name.forEach(i => console.log(i))

console.log(myobj)
*/

// ? let [ nameOfVariable, setFunctionToUpdateVariable ] = useState (<initial_state>)

/*
function useState(startingData) {
  function updateData(newData){
    startingData = newData
  }
} 
return [startingData, newData]
 */

// TODO: Build out a Counter component which will have two buttons (+) and (-) and a span elelemnt that will take its value from a count state variable. Create two functions that will work as onclick event listeners. They will increase and decrease the counter.
// TODO: HARD MODE: Leave the count inside App.jsx 



let [ names, setMyName ] = useState(["Leif","Nick", "James", "Danika"])

  return (
    <> 
    {/* We've mounted a Nav compenent below */}
    <Nav />
      <div>The purpose of a component is to render something</div>
      <div>We are rendering something else</div>
      <div>We can wrap everything in fragments</div>
    {/* <Welcome name={myName}/> */}
    {names.map((name, index) => {
      return(
        <Welcome key={index} name={name} allNames={names} updateNames={setMyName}/>
        )
      })}
      <Counter />
      
      <footer>Copyright, {year}</footer>
    </>
  );
}

export default App;
