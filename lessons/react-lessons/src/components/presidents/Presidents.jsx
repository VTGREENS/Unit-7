import React from 'react'
import { presidentsArray } from './presidents.constant'
import PresidentTable from './PresidentTable'
/* 
1- Pass down to the President Table a "TITLE" display the "TITLE" in the President's table. Pass Down "Living Presidents"
2- Pass down to the Presidents Table "presidentData" and pass it the livingPresidents
3- Create a new variable to store the deceased presidents and filter the data from the preidentsArray
*/

function Presidents(props) {
    const livingPresidents = presidentsArray.filter(president => president.passed === undefined);
    
    const deceasedPresidents = presidentsArray.filter(president => president.passed !== undefined);
  return (
    <>
    <h2>Hello from Presidents</h2>
    <PresidentTable 
    title= "Living Presidents" 
    presidentsData = {livingPresidents}/>
    <PresidentTable title="Deceased Preseidents" presidentsData = {deceasedPresidents}/>
    </>
  )
}

export default Presidents