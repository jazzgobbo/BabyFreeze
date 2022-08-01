
import alexafun from "./images/bandmembers/alexafun.jpeg";
import delaneyfun from "./images/bandmembers/delaneyfun.jpeg";
import "./Members.css";
import { useState } from "react";


const Alexa = 
    <div className="myslides-fade">
    <div className="numbertext">1 / 6</div>
    <img src={alexafun} alt="alexafun"></img>
    <div className="text"><strong> ALEXA  </strong></div>
    <div className="text"><strong> AQUARIUS </strong></div>
    <div className="text"><strong> VOCALS  </strong></div>
  </div>


const Delaney = 
      <div className="myslides-fade">
              <div className="numbertext">2 / 6</div>
              <img src={delaneyfun} alt="alexafun"></img>
              <div className="text"><strong> DELANEY </strong></div>
              <div className="text"><strong> LIBRA </strong></div>
              <div className="text"><strong> VOCALS  </strong></div>
            </div>

const members = [Alexa, Delaney]


const Members = () => {

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((i) => (i + 1) % members.length);
    };

    const prev = () => {
        setIndex((i) => (i - 1) % members.length);
      };

    
    return (
            <div className="members">
                <div className="member">
                    {members[index]}
                </div>
                <div className="buttons">
                    <button onClick={prev}>&lt;</button>
                    <button onClick={next}>&gt;</button>
                </div>
            </div>

     );

}

export default Members;