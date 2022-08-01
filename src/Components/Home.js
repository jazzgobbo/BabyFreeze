
import { NavBar } from "./NavBar.js";
import { Link } from 'react-router-dom';
import Members from "./Members.js";
import Welcome from "./Welcome.js";
import "../Styles/Home.css"


export const Home = () => {
  return (
    <div className="Home">
      <div className="Home-content">
        <Welcome />
        <Members />
      </div>
    </div>
  );
}

