import React, { useState } from 'react';

const Monkey = (props) => {
    const [monkeyCount, setMonkeyCount] = useState(10);

    function handleClick(){
        console.log("it works");
        setMonkeyCount(monkeyCount - 1);
    }
    return (
       <>
       {monkeyCount>0 ? (
       <p>{monkeyCount} little monkeys are jumping on the bed, 1 fell off and bumped it's head</p>
        ) : (
            <p>There are no monkeys left.</p>
        )}
       <button onClick={handleClick}>Click Me</button>
       </> 
      );
}
 
export default Monkey;