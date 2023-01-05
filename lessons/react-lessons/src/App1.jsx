import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import ChallengeOneInstructions from './components/challenges/ChallengeOneInstructions.jsx';
import AboutMe from './components/challenges/AboutMe/AboutMe.jsx';

function App() {
  return (
    <div className="App">
     <Header/>
      <h1>Hello from App.js</h1>
      <ChallengeOneInstructions/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;