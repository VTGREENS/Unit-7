import EmployeeInformation from "./EmployeeInformation"
function Employees(){
    let employeeRecords = [{
        name: "Jester Bash",
        city: "Frankfort",
        state: "KY",
        position: "developer",
        food: "BBQ"
        },
    {
        name: "Jacinder Williams",
        city: "South Bend",
        state: "IN",
        position: "developer",
        food: "Chicken Fried Steak"

    }
    ]
return(
    <>
    <h1>Hello from employees</h1>
    {employeeRecords.map((employeeRecord, index)=> (
    <EmployeeInformation 
    key={index}
    name={employeeRecord.name} 
    city={employeeRecord.city}
    state={employeeRecord.state}
    postition={employeeRecord.position} 
    food={employeeRecord.food}
    />
    
    ))}
    </>
) 

}

export default Employees