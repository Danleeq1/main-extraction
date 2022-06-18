/* eslint-disable jsx-a11y/alt-text */
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css"
import Button from "react-bootstrap/Button";
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
       <Navbar fixed="top"/> 
      </div>
      <div className="Container">

        <div className="backgroundImage">
          <div className="overlay">
          </div>
          <div className="text">
            <h1> Welcome to Main Extraction</h1>
            <h2>Coffee Roasters! </h2>
            <div className ="button">
        <Button variant="outline-danger">Learn More</Button>
        </div>
          </div>
        </div>
      </div>

  
</header>
 </div>
    

  );
}

export default App;
