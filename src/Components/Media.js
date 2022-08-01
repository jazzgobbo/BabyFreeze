import { NavBar } from "./NavBar.js";
import { Link } from 'react-router-dom';
import "../Styles/Media.css";


export const Media = () => {
  return (
    <div className="Media">
      <div className="Media-content">
        <div className="youtube">
            <iframe src="https://www.youtube.com/embed/klkOPcJpUSU" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
        </div>
        <div className="pictures"></div>
      </div>
    </div>
  );
}

