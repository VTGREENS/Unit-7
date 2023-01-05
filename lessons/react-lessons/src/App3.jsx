import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Presidents from './components/presidents/Presidents';


function App() {
  return (
    <div className="App">
     <Header/>
      <h1>Hello from App.js</h1>
      <Presidents />
      <Footer/>
    </div>
  );
}

export default App;