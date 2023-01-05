import React from 'react'

function PresidentsRow(props) {
    const currentYear = new Date().getFullYear();
  return (
    <>
    <tr>
        <td>{props.presidentData.first}</td>
        <td>{props.presidentData.last}</td>
        <td>{props.presidentData.year}</td>
        <td>{props.presidentData.passed=== undefined ? "Yes" : "No"}</td>
        <td>{props.presidentData.passed === undefined
            ? currentYear - props.presidentData.year
            : props.presidentData.passed - props.presidentData.year}</td>
    </tr>
    </>
  )
}

export default PresidentsRow