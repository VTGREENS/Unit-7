import React from 'react'
import PresidentsRow from './PresidentsRow'

function PresidentTable(props) {
  return (
    <>
    <h2>{props.title}</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birth Year</th>
                    <th>Currently Living</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {props.presidentsData.map((presidentData, index) => (
                    <PresidentsRow key={index} presidentData={presidentData}/>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default PresidentTable