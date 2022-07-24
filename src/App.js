import './App.css';
import background from "./images/BBFbackground2.jpeg";
import NavBar from "./NavBar.js";
import { Link } from 'react-router-dom';
import Members from "./Members.js";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <Members />
      </div>
    </div>
  );
}

export default App;
