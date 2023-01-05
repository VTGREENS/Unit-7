/* 
Boiler Plate Code for Functional Components without Props
- Create a function with a return of jsx (single element)
- Export the function using export default and the function name.
*/

function Header() {
    const firstName = "Leif";
    return (<header>
    <h1>Welcome to React, {firstName} </h1>
    <h2>We just modified our header component</h2>
    </header>
  ); 
}

export default Header;