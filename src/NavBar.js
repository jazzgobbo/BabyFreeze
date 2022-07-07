import "./NavBar.css"
import logo from "./images/logo.jpeg";
import insta from "./images/insta.jpeg";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className="nav">
        <div className="babyfreeze-image">
            <img src={logo} alt="logo" href="#logo" class="logo"></img> 
        </div>
        <div className="babyfreeze-title">
            <h1>BABYFREEZE</h1>
        </div>
        <div className="babyfreeze-ig">
            <a href="https://www.instagram.com/bbyfrze/">
                <img src={insta} alt="insta"></img> 
            </a>
        </div>
    </nav>
    );
}

export default NavBar;