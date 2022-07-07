import './App.css';
import background from "./images/BBFbackground2.jpeg";
import NavBar from "./NavBar.js";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <img src={background} alt="alt text"></img>
      </div>
    </div>
  );
}

export default App;
