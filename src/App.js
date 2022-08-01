import './App.css';
import NavBar from "./NavBar.js";
import { Link } from 'react-router-dom';
import Members from "./Members.js";
import Welcome from "./Welcome.js";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <Welcome />
        <Members />
      </div>
    </div>
  );
}

export default App;
