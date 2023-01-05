// PresidentVoting.jsx is parent component of DisplayVoteTotals.jsx

import DisplayVoteTotals from "./DisplayVoteTotals";

function PresidentVoting(){
    const votes = [
        {name: "Abe Lincoln", count: 139033},
        {name: "Stephen Douglas", count: 115509}
    ]
    return(
        <>
        <h1>Hello from President Voting</h1>
        {votes.map((vote, index)=>(
            <DisplayVoteTotals key={index} name={vote.name} count={vote.count}/>
        ))}
        {/* <DisplayVoteTotals name={votes[0].name} count={votes[0].count}/>
        <DisplayVoteTotals name={votes[1].name} count={votes[1].count}/> */}
        </>
    );
}

export default PresidentVoting;
