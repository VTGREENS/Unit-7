// DisplayVoteTotals.jsx is the child of PresidentVoting.jsx

function DisplayVoteTotals(props){
    return(
        <>
        <p>{props.name} has a total vote count of {props.count}</p>
        </>

    );

}

export default DisplayVoteTotals;