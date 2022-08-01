
import alexafun from "../images/bandmembers/alexafun.jpeg";
import delaneyfun from "../images/bandmembers/delaneyfun.jpeg";
import salomefun from "../images/bandmembers/salomefun.jpeg";
import catiefun from "../images/bandmembers/catiefun.jpeg";
import jordanfun from "../images/bandmembers/jordanfun.jpeg";
import carolinefun from "../images/bandmembers/carolinefun.jpeg";
import "../Styles/Members.css";
import { useState } from "react";


const Alexa = <div className="member">
                <div className="numbertext">1 / 6</div>
                <img src={alexafun} alt="alexafun"></img>
                <div className="text"><strong> ALEXA  </strong></div>
                <div className="text"><strong> AQUARIUS </strong></div>
                <div className="text"><strong> VOCALS  </strong></div>
            </div>
 
const Delaney = <div className="member">
                    <div className="numbertext">2 / 6</div>
                    <img src={delaneyfun} alt="delaneyfun"></img>
                    <div className="text"><strong> DELANEY </strong></div>
                    <div className="text"><strong> LIBRA </strong></div>
                    <div className="text"><strong> VOCALS  </strong></div>
              </div>


const Salome = <div className="member">
                    <div className="numbertext">3 / 6</div>
                    <img src={salomefun} alt="salomefun"></img>
                    <div className="text"><strong> SALOME </strong></div>
                    <div className="text"><strong> SCORPIO </strong></div>
                    <div className="text"><strong> GUITAR  </strong></div>
              </div>

const Catie = <div className="member">
                    <div className="numbertext">4 / 6</div>
                    <img src={catiefun} alt="catiefun"></img>
                    <div className="text"><strong> CATIE </strong></div>
                    <div className="text"><strong> GEMINI </strong></div>
                    <div className="text"><strong> BASS  </strong></div>
              </div>

const Jordan = <div className="member">
                    <div className="numbertext">5 / 6</div>
                    <img src={jordanfun} alt="jordanfun"></img>
                    <div className="text"><strong> JORDAN </strong></div>
                    <div className="text"><strong> SCOPRIO </strong></div>
                    <div className="text"><strong> DRUMS  </strong></div>
              </div>

const Caroline = <div className="member">
                    <div className="numbertext">6 / 6</div>
                    <img src={carolinefun} alt="carolinefun"></img>
                    <div className="text"><strong> CAROLINE </strong></div>
                    <div className="text"><strong> ARIES </strong></div>
                    <div className="text"><strong> KEYS  </strong></div>
              </div>

const members = [Alexa, Delaney, Salome, Catie, Jordan, Caroline]

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
                {members[index]}
                <div className="buttons">
                    <button onClick={prev}>&lt;</button>
                    <button onClick={next}>&gt;</button>
                </div>
            </div>

     );

}

export default Members;