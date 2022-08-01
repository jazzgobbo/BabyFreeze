import './App.css';
import NavBar from "./Components/NavBar.js";
import { Link } from 'react-router-dom';
import Members from "./Components/Members.js";
import Welcome from "./Components/Welcome.js";


const App = () => {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
