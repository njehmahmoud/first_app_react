import './App.css';
// import NavBar from './components/NavBar'
import Main from './components/Main'
import Header from "./components/Header/Header"
import Status from "./components/Status/Status"
import Brand from "./components/Brand/Brand"



function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Brand />
      <Status />
      
    </div>
  );
}

export default App;
