import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import EmployeeInformation from './components/employeeInformation/EmployeeInformation';
import Employees from './components/employeeInformation/Employees';
import PresidentVoting from './components/voting/PresidentVoting';


function App() {
  return (
    <div className="App">
     <Header/>
      <h1>Hello from App.js</h1>
      {/* <Employees/>
      <EmployeeInformation name="Conner Sheilds" city="Tucson" state="Arizona" postition="developer" food="Burritos"/>
      <EmployeeInformation name="Isaac Haynes" city="Nashville" state="Tennasee" postition="developer" food="BBQ"/> */}
      <PresidentVoting/>
      <Footer/>
    </div>
  );
}

export default App;