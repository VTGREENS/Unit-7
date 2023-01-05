function EmployeeInformation(props){

    
    return(
        <>
        <h1>{props.name}</h1>
        <ul style = {{listStyleType: "none", textAlign: "left"}}>
            <li> From:{props.city}, {props.state}</li>
            <li>Position:{props.postition}</li>
            <li>Favorite Food:{props.food}</li>
        </ul>
        </>
    );
}

export default EmployeeInformation